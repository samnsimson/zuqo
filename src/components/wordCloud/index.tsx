import { FC, HTMLAttributes, useEffect, useRef } from 'react'

interface WordCloudData {
    name: string
    value: number
    color: string
}

interface WordCloudProps extends HTMLAttributes<HTMLDivElement> {
    data: WordCloudData[]
    width: number
    height: number
    space: number
    scale: number
    concentration: number
}

export const WordCloud: FC<WordCloudProps> = ({ width, height, data, concentration, space, scale, ...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        if (!ctx) {
            console.error('Canvas context not available.')
            return
        }

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Calculate the rectangular area within the canvas for circle placement
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const areaWidth = canvas.width * concentration
        const areaHeight = canvas.height * concentration
        const areaX = centerX - areaWidth / 2
        const areaY = centerY - areaHeight / 2

        // Sort data points by value in descending order
        const sortedData = [...data].sort((a, b) => b.value - a.value)

        // Store the positions and radii of placed circles to check for collisions
        const placedCircles: { x: number; y: number; radius: number }[] = []

        // Function to check for collisions between circles
        function isColliding(x: number, y: number, radius: number) {
            for (const circle of placedCircles) {
                const dx = x - circle.x
                const dy = y - circle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < radius + circle.radius + space) {
                    return true // Collision detected
                }
            }
            return false // No collision
        }

        // Iterate through the data and plot circles
        sortedData.forEach((point) => {
            // Calculate the radius of the circle based on the value and the scale
            const maxRadius = Math.min(areaWidth, areaHeight) / 2
            const radius = (point.value / 100) * maxRadius * scale // Adjust the radius based on the value and scale factor

            let x, y
            let attempts = 0
            const maxAttempts = 100 // Maximum number of attempts to find a suitable position

            // Randomly generate positions within the restricted area with spacing while avoiding collisions
            do {
                x = areaX + radius + Math.random() * (areaWidth - 2 * radius - space * 2)
                y = areaY + radius + Math.random() * (areaHeight - 2 * radius - space * 2)
                attempts++

                // If maxAttempts is reached, skip placing this circle
                if (attempts >= maxAttempts) {
                    console.error('Maximum attempts reached for circle placement.')
                    return
                }
            } while (isColliding(x, y, radius))

            // Store the position and radius of the placed circle
            placedCircles.push({ x, y, radius })

            // Draw the circle
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = point.color // Customize the circle color
            ctx.fill()

            // Calculate the maximum font size to prevent text overflow
            const maxTextWidth = radius * 2 - 10 // Adjusted for padding
            const maxTextHeight = radius * 2 - 10 // Adjusted for padding
            let fontSize = 12 // Initial font size

            ctx.font = `${fontSize}px Arial`

            // Keep reducing the font size until it fits within the circle
            while (ctx.measureText(point.name.toUpperCase()).width > maxTextWidth || fontSize > maxTextHeight) {
                fontSize--
                ctx.font = `${fontSize}px Arial`
            }

            // Calculate the position for the text label to be centered within the circle
            const textX = x
            const textY = y

            // Draw the capitalized white text label at the center of the circle
            ctx.fillStyle = '#fff' // White text color
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(point.name.toUpperCase(), textX, textY)
        })
    }, [data, width, height, concentration, space, scale])

    return (
        <div {...props}>
            <canvas ref={canvasRef} width={width} height={height} />
        </div>
    )
}

import '../src/app.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <head>
                <title>Vite + React + TS</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="module" src='app/[[...slug]]/page.tsx'></script>
            </body>
        </html>
    )
  }
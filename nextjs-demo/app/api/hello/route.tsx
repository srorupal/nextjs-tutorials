import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export async function GET(request: Request) {
    redirect('http://localhost:3000')
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    req.cookies.get('cookie')

    console.log(req.cookies.get('cookie'))

    return new Response ('OK')
}
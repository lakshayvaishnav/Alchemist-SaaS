'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Ui/card"
import { Input } from "@/components/Ui/input"
import { Label } from "@/components/Ui/label"
import { Button } from "@/components/Ui/button"
import Link from 'next/link'
import { Mail, Lock, Loader2, Github } from 'lucide-react'
import { IconBrandGoogleFilled, IconBrandGoogleFit, IconBrandGoogleHome } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

const StarField = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  )
}

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <StarField />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl z-10"
      >
        <Card className="bg-neutral-950 text-gray-100 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 pl-10"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button  
              variant="outline" 
              className="w-full bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700"
              onClick={()=> signIn("google",{redirect:true,callbackUrl:"/dashboard/profile"})}
              disabled={isLoading}
            >
              <IconBrandGoogleFilled  className="mr-2 h-5 w-5" />
              Sign in with google
            </Button>
            <div className="flex flex-col space-y-2 text-center text-sm text-gray-400">
              <Link href="/forgot-password" className="hover:text-blue-400 underline">
                Forgot your password?
              </Link>
              <p>
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-400 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
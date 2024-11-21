'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import { Github } from 'lucide-react'

interface ProjectCardProps {
  projectName: string
  projectIcon: string
  developerName: string
  developerAvatar: string
  description: string
  githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectIcon,
  developerName,
  developerAvatar,
  description,
  githubUrl
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={projectIcon} alt={projectName} />
          <AvatarFallback>{projectName.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">{projectName}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={developerAvatar} alt={developerName} />
            <AvatarFallback>{developerName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-600 dark:text-gray-300">{developerName}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
      <CardFooter>
        <motion.div
          className="w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
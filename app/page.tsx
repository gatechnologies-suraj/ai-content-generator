'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { LayoutTemplate, Component, File, Power, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b border-primary">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={80} height={40} />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/gatechnologies-suraj" className="flex items-center space-x-2">
            <Github className="w-6 h-6 text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/suraj-kumar-26a611248/" className="flex items-center space-x-2">
            <Linkedin className="w-6 h-6 text-primary" />
          </Link>
          <Link href="https://www.instagram.com/bholi___07" className="flex items-center space-x-2">
            <Instagram className="w-6 h-6 text-primary" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-4 mt-20 bg-cover bg-center"
            style={{ 
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 100'><defs><pattern id='stripes' patternUnits='userSpaceOnUse' width='20' height='20'><path d='M0,0 l20,20 M-5,5 l10,-10 M15,25 l10,-10' stroke='%23e0e0e0' stroke-width='2' /></pattern></defs><rect width='100%' height='100%' fill='url(%23stripes)' /></svg>")` 
            }}>
        <h1 className="text-5xl font-bold text-center">
          AI Content <span className="text-primary">Generator</span>
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in
          seconds.
        </p>
        <Link href={"/dashboard"}>
          <Button className="mt-6 bg-primary text-white hover:bg-primary-dark">
            Get started
          </Button>
        </Link>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <LayoutTemplate className="w-12 h-12 mx-auto text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary">25+ templates</CardTitle>
              <CardDescription>Responsive, and mobile-first project on the web</CardDescription>
              <Link href="#" className="text-primary" prefetch={false}>
                Learn more
              </Link>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Component className="w-12 h-12 mx-auto text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary">Customizable</CardTitle>
              <CardDescription>Components are easily customized and extendable</CardDescription>
              <Link href="#" className="text-primary" prefetch={false}>
                Learn more
              </Link>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <File className="w-12 h-12 mx-auto text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary">Free to Use</CardTitle>
              <CardDescription>Every component and plugin is well documented</CardDescription>
              <Link href="#" className="text-primary" prefetch={false}>
                Learn more
              </Link>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Power className="w-12 h-12 mx-auto text-primary" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary">24/7 Support</CardTitle>
              <CardDescription>Contact us 24 hours a day, 7 days a week</CardDescription>
              <Link href="#" className="text-primary" prefetch={false}>
                Learn more
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <p className="text-center text-sm mt-10">@Made by Suraj Kumar</p>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Code, TrendingUp, Brain, Target, Cuboid as Cube } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Navigate the Future of Web3
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            ChainPilot Labs guides you through the blockchain ecosystem with expert development, strategic innovation, and cutting-edge marketing solutions.
          </p>
          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Web3 Innovation Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Pioneering Web3 Innovation</h2>
              <p className="text-gray-400 mb-8">
                At ChainPilot Labs, we're not just building for today - we're architecting the future of decentralized technology. Our team combines deep technical expertise with strategic insight to deliver cutting-edge Web3 solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Brain className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">Advanced blockchain solutions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Target className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">Strategic implementation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Cube className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">Scalable architecture</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80"
                alt="Web3 Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive Web3 solutions to help your business thrive in the decentralized future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <Code className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">DApp Development</h3>
              <p className="text-gray-400">
                Custom decentralized applications built with the latest blockchain technologies.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <Rocket className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Contracts</h3>
              <p className="text-gray-400">
                Secure and efficient smart contract development and auditing services.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <TrendingUp className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Web3 Marketing</h3>
              <p className="text-gray-400">
                Strategic marketing solutions to boost your Web3 project's visibility and adoption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team of visionaries and experts is dedicated to pushing the boundaries of Web3 technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* CEO */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700">
                  <img
                    src="./rishabh.jpeg"
                    alt="Rishabh - CEO"
                    className="w-full h-full object-cover mix-blend-overlay opacity-75"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rishabh</h3>
              <p className="text-emerald-500 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-400">
                Visionary leader with extensive experience in blockchain technology and business strategy.
              </p>
            </div>

            {/* CTO */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700">
                  <img
                    src="./gautam.jpeg"
                    alt="Gautam - CTO"
                    className="w-full h-full object-cover mix-blend-overlay opacity-75"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gautam</h3>
              <p className="text-emerald-500 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-400">
                Technical genius behind our innovative blockchain solutions and architecture.
              </p>
            </div>

            {/* CFO */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700">
                  <img
                    src="./anshul.jpeg"
                    alt="Anshul - CFO"
                    className="w-full h-full object-cover mix-blend-overlay opacity-75"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anshul</h3>
              <p className="text-emerald-500 font-medium mb-4">Chief Financial Officer</p>
              <p className="text-gray-400">
                Financial strategist ensuring sustainable growth and optimal resource allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
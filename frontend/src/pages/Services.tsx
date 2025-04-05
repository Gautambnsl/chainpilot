import React from 'react';
import { Code, Rocket, TrendingUp, Shield, Users, Zap } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive Web3 solutions tailored to your needs. From development to marketing, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* DApp Development */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <Code className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">DApp Development</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Custom decentralized application development</li>
              <li>• Frontend and backend integration</li>
              <li>• Web3 wallet integration</li>
              <li>• Cross-chain compatibility</li>
            </ul>
          </div>

          {/* Smart Contracts */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <Rocket className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Smart contract development</li>
              <li>• Security audits and optimization</li>
              <li>• Token development (ERC-20, ERC-721, ERC-1155)</li>
              <li>• DeFi protocol development</li>
            </ul>
          </div>

          {/* Web3 Marketing */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <TrendingUp className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Web3 Marketing</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Community building and management</li>
              <li>• Social media strategy</li>
              <li>• Content creation and distribution</li>
              <li>• Influencer partnerships</li>
            </ul>
          </div>

          {/* Security Services */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <Shield className="h-12 w-12 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Smart contract auditing</li>
              <li>• Penetration testing</li>
              <li>• Security best practices implementation</li>
              <li>• Ongoing security monitoring</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">Experienced developers and marketers specialized in Web3</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
              <p className="text-gray-400">Top-tier security practices and thorough testing</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Quick turnaround without compromising quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
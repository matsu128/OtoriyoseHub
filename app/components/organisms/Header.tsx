'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleLeft, Mail } from 'lucide-react';

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition-colors"
          >
            ぽんまつサイト
          </Link>
          <Button 
            variant="outline"
            onClick={() => setIsLoginOpen(true)}
          >
            ログイン
          </Button>
        </div>
      </header>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ログイン</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Input type="email" placeholder="メールアドレス" />
              <Input type="password" placeholder="パスワード" />
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                ログイン
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">または</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <ToggleLeft className="mr-2 h-4 w-4" />
                Googleでログイン
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 21 20" fill="currentColor">
                  <path d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm0 19.5c-4.9 0-9-4-9-9s4-9 9-9 9 4 9 9-4.1 9-9 9z"/>
                </svg>
                LINEでログイン
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
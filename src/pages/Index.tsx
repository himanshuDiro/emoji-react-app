
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmojiScale from '@/components/emoji-scale/EmojiScale';
import EmojiScaleModal from '@/components/emoji-scale/EmojiScaleModal';
import EmojiScaleDocumentation from '@/components/emoji-scale/Documentation';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [lastSelection, setLastSelection] = useState<string | null>(null);
  const { toast } = useToast();

  const handleMoodSelection = (mood: string) => {
    setLastSelection(mood);
    toast({
      title: "Mood Selected",
      description: `You selected: ${mood}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Emoji Scale Widget
          </h1>
          <p className="text-gray-600 mt-1">
            A responsive feedback widget for collecting user emotions
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Tabs defaultValue="widget" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="widget">Widget Demo</TabsTrigger>
              <TabsTrigger value="modal">Modal Demo</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>

            <TabsContent value="widget" className="p-4 rounded-lg bg-white shadow">
              <div className="max-w-3xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Emoji Scale Widget Demo</CardTitle>
                    <CardDescription>
                      A standalone implementation of the emoji scale widget
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmojiScale onSelection={handleMoodSelection} />
                  </CardContent>
                  {lastSelection && (
                    <CardFooter>
                      <p className="text-sm text-gray-500">
                        Last selection: <span className="font-semibold">{lastSelection}</span>
                      </p>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="modal" className="p-4 rounded-lg bg-white shadow">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Emoji Scale Modal Demo</CardTitle>
                    <CardDescription>
                      The emoji scale widget implemented as a modal dialog
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center py-10">
                    <EmojiScaleModal 
                      onSelection={handleMoodSelection} 
                      triggerLabel="Open Wellbeing Check-in"
                    />
                  </CardContent>
                  {lastSelection && (
                    <CardFooter>
                      <p className="text-sm text-gray-500">
                        Last selection: <span className="font-semibold">{lastSelection}</span>
                      </p>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="docs">
              <EmojiScaleDocumentation />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Emoji Scale Widget - A responsive React component for collecting user emotions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmojiScaleDocumentation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Emoji Scale Widget Documentation</h1>
      
      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-4 w-full mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Emoji Scale Widget</CardTitle>
              <CardDescription>
                A React component for collecting user mood or satisfaction feedback using a visual emoji scale.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Emoji Scale Widget is a customizable component that presents users with a range of emotions represented as emoji icons.
                Users can select an emoji that best represents their current mood or feeling, and the component can be easily integrated
                into forms, surveys, or as a standalone check-in tool.
              </p>
              <p className="mb-4">
                This widget is fully responsive and works across all device sizes - mobile, tablet, and desktop.
              </p>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Five pre-defined mood options with customizable emojis and labels</li>
                <li>Visual feedback on selection with animations</li>
                <li>Accessible design with proper ARIA attributes</li>
                <li>Toast notifications for feedback confirmation</li>
                <li>Customizable titles, questions, and button labels</li>
                <li>Available as both standalone component and modal dialog</li>
                <li>Fully responsive across all device sizes</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Component Structure</CardTitle>
              <CardDescription>
                The widget is composed of several components working together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>EmojiOption</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      A single selectable emoji option. Handles the display of the emoji, label, and selection state.
                    </p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                      <code>{`<EmojiOption
  emoji="😁"
  label="Fantastic"
  color="#7CAF9E"
  selected={selectedMood === "fantastic"}
  onClick={() => handleMoodSelect("fantastic")}
/>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>EmojiScale</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The main widget component that brings together the emoji options, title, question,
                      and submit button. Manages the state of the selected mood.
                    </p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                      <code>{`<EmojiScale
  onSelection={(value) => console.log("Selected mood:", value)}
  title="Wellbeing Check-in"
  question="How are you feeling today?"
  submitLabel="Continue"
/>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>EmojiScaleModal</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      A wrapper component that places the EmojiScale inside a modal dialog.
                      Provides a trigger button and handles the open/close state.
                    </p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                      <code>{`<EmojiScaleModal
  onSelection={(value) => console.log("Selected mood:", value)}
  triggerLabel="Open Wellbeing Check-in"
/>`}</code>
                    </pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Integration Examples</CardTitle>
              <CardDescription>
                How to use the Emoji Scale Widget in your React application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                    <code>{`import { EmojiScale } from './components/emoji-scale';

function App() {
  const handleMoodSelection = (mood) => {
    console.log("User selected mood:", mood);
    // Save to database, update state, etc.
  };

  return (
    <div className="container mx-auto p-4">
      <EmojiScale onSelection={handleMoodSelection} />
    </div>
  );
}`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Modal Dialog Usage</h3>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                    <code>{`import { EmojiScaleModal } from './components/emoji-scale';

function App() {
  const handleMoodSelection = (mood) => {
    console.log("User selected mood:", mood);
    // Process the selection
  };

  return (
    <div className="container mx-auto p-4">
      <h1>My Application</h1>
      <EmojiScaleModal 
        onSelection={handleMoodSelection}
        triggerLabel="Check In"
      />
    </div>
  );
}`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Custom Options</h3>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                    <code>{`import { EmojiScale } from './components/emoji-scale';

function App() {
  const customOptions = [
    { emoji: "🌧️", label: "Stormy", color: "#6B7280", value: "stormy" },
    { emoji: "⛅", label: "Cloudy", color: "#9CA3AF", value: "cloudy" },
    { emoji: "🌤️", label: "Partly Sunny", color: "#D1D5DB", value: "partly_sunny" },
    { emoji: "☀️", label: "Sunny", color: "#FBBF24", value: "sunny" }
  ];

  return (
    <div className="container mx-auto p-4">
      <EmojiScale 
        options={customOptions}
        question="How would you describe your day?"
        title="Daily Weather Check"
        submitLabel="Submit"
      />
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="props">
          <Card>
            <CardHeader>
              <CardTitle>Component Props</CardTitle>
              <CardDescription>
                Available props for customizing the components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-3">EmojiOption Props</h3>
              <table className="min-w-full mb-6">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">emoji</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">The emoji character to display</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">label</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">The text label for the emotion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">color</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">Background color for the emoji (hex, rgb, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">selected</td>
                    <td className="py-2 text-gray-600">boolean</td>
                    <td className="py-2">Whether this option is currently selected</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">onClick</td>
                    <td className="py-2 text-gray-600">() => void</td>
                    <td className="py-2">Callback function when the option is clicked</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">testId</td>
                    <td className="py-2 text-gray-600">string (optional)</td>
                    <td className="py-2">Test ID for automated testing</td>
                  </tr>
                </tbody>
              </table>
              
              <h3 className="text-lg font-semibold mb-3">EmojiScale Props</h3>
              <table className="min-w-full mb-6">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">options</td>
                    <td className="py-2 text-gray-600">MoodOption[]</td>
                    <td className="py-2">Default emojis</td>
                    <td className="py-2">Array of mood options to display</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">onSelection</td>
                    <td className="py-2 text-gray-600">(value: string) => void</td>
                    <td className="py-2">undefined</td>
                    <td className="py-2">Callback when user submits a selection</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">title</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">"Wellbeing Check-in"</td>
                    <td className="py-2">Title text for the component</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">question</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">"Hello! How are you feeling today?"</td>
                    <td className="py-2">Question text displayed above the emojis</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">submitLabel</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">"Continue"</td>
                    <td className="py-2">Text for the submit button</td>
                  </tr>
                </tbody>
              </table>
              
              <h3 className="text-lg font-semibold mb-3">EmojiScaleModal Props</h3>
              <p className="mb-3">Includes all props from EmojiScale plus:</p>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">triggerLabel</td>
                    <td className="py-2 text-gray-600">string</td>
                    <td className="py-2">"Open Wellbeing Check-in"</td>
                    <td className="py-2">Text for the button that opens the modal</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmojiScaleDocumentation;

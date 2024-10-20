import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar />
      <div className="grid grid-cols-2 gap-4 items-center p-24">
        <div>
          <Text variant="4xl">Create Beautiful Charts</Text>
          <Text variant="base">
            Customize your chart and share to your audience!
          </Text>
          <Button>Get Started</Button>
        </div>
      </div>
    </main>
  );
}

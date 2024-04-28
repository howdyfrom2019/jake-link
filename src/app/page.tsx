import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <ToggleGroup type={"multiple"}>
        <ToggleGroupItem value={"bold"} aria-label={"Toggle bold"}>
          <Bold className={"h-4 w-4"} />
        </ToggleGroupItem>
        <ToggleGroupItem value={"italic"} aria-label={"Toggle italic"}>
          <Italic className={"h-4 w-4"} />
        </ToggleGroupItem>
        <ToggleGroupItem value={"underline"} aria-label={"Toggle underline"}>
          <Underline className={"h-4 w-4"} />
        </ToggleGroupItem>
      </ToggleGroup>
    </main>
  );
}

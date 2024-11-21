import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Code,
  Facebook,
  Image,
  Image as ImageIcon,
  Link as LinkIcon,
  Linkedin,
  Share,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import Link from "next/link";

type Props = {
  LinktoTestimonial: string;
  id: string;
};

export default function ShareDropdown({ LinktoTestimonial, id }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const toggleDialog = () => setIsDialogOpen((prev) => !prev);
  const toggleImageDialog = () => setIsImageDialogOpen((prev) => !prev);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(LinktoTestimonial);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Failed to copy the link:", error);
    }
  };
  const generateImageFromHtml = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        // Wait for Tailwind styles to be applied (if necessary)
        html2canvas(element, {
          useCORS: true,
          logging: false,
          scale: 2,
          backgroundColor: null,
        }).then((canvas) => {
          const img = canvas.toDataURL("image/png");

          // Display or download the image
          const imageElement = document.createElement("img");
          imageElement.src = img;
          document.body.appendChild(imageElement);

          // Trigger download of the image
          const link = document.createElement("a");
          link.href = img;
          link.download = `${id}.png`;
          link.click();
        });
      }, 1000); // Ensure TailwindCSS styles are applied
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
        <Share className="text-zinc-300 h-4 w-4" />
        Share
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={toggleDialog}>
          <LinkIcon />
          Get the link
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Code />
          Embed the testimonial
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => generateImageFromHtml(id)}>
          <ImageIcon />
          Create an image
        </DropdownMenuItem>
        <DropdownMenuItem>
          <X />
          Share on X
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Linkedin />
          Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Facebook />
          Share on Facebook
        </DropdownMenuItem>
      </DropdownMenuContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger />
        <DialogContent className="min-w-[50vw]">
          <DialogHeader>
            <DialogTitle>Share settings</DialogTitle>
            <DialogDescription>
              Customize your share testimonial
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Link</h2>
            <div className="w-full px-4 rounded-sm bg-gray-800 py-2 text-base font-sans text-zinc-200">
              {LinktoTestimonial}
            </div>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleCopyLink}
            >
              {copySuccess ? "Link copied!" : "Copy link"}
            </Button>
            <Link
              className="ml-2"
              href={LinktoTestimonial}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"outline"}>Visit Page</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </DropdownMenu>
  );
}

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>
        Itaque aperiam necessitatibus deleniti inventore repudiandae laborum
        cupiditate, labore ratione doloremque beatae laudantium dolor sint
        nesciunt fuga illum accusantium exercitationem cumque adipisci dolore
        fugit pariatur distinctio? Quos?
      </p>

      <Button variant="primary" onClick={setOpen}>
        Open Dailog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <div>
          <DialogContent className="xl:max-w-xl">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                <p>
                  Itaque aperiam necessitatibus deleniti inventore repudiandae
                  laborum cupiditate, labore ratione doloremque beatae
                  laudantium dolor sint nesciunt fuga illum accusantium
                  exercitationem cumque adipisci dolore fugit pariatur
                  distinctio? Quos?
                </p>
                <p>
                  Itaque aperiam necessitatibus deleniti inventore repudiandae
                  laborum cupiditate, labore ratione doloremque beatae
                  laudantium dolor sint nesciunt fuga illum accusantium
                  exercitationem cumque adipisci dolore fugit pariatur
                  distinctio? Quos?
                </p>{" "}
                <p>
                  Itaque aperiam necessitatibus deleniti inventore repudiandae
                  laborum cupiditate, labore ratione doloremque beatae
                  laudantium dolor sint nesciunt fuga illum accusantium
                  exercitationem cumque adipisci dolore fugit pariatur
                  distinctio? Quos?
                </p>{" "}
                <p>
                  Itaque aperiam necessitatibus deleniti inventore repudiandae
                  laborum cupiditate, labore ratione doloremque beatae
                  laudantium dolor sint nesciunt fuga illum accusantium
                  exercitationem cumque adipisci dolore fugit pariatur
                  distinctio? Quos?
                </p>
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                onClick={() => {
                  // your save logic
                  setOpen(false);
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default Home;

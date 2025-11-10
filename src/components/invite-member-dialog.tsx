'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';

const formSchema = z.object({
  emailOrUsername: z.string().min(3, 'Please enter a valid email or username.'),
});

// Assume the user has a limited number of invites. This would come from an API.
const MAX_INVITES = 5;

export function InviteMemberDialog({ teamName }: { teamName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sentInvites, setSentInvites] = useState(3); // Mock data

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrUsername: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (sentInvites >= MAX_INVITES) {
      toast.error("You have reached your invitation limit.");
      return;
    }
    // Simulate API call
    console.log(`Inviting ${values.emailOrUsername} to ${teamName}`);
    toast.success(`Invitation sent to ${values.emailOrUsername}!`);
    setSentInvites(prev => prev + 1);
    form.reset();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite a new member</DialogTitle>
          <DialogDescription>
            You have {MAX_INVITES - sentInvites} invitations left.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="emailOrUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={sentInvites >= MAX_INVITES}>Send Invitation</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

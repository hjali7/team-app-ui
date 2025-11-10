'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Settings,
  User,
  LayoutDashboard,
  KanbanSquare,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CreateTeamDialog } from './create-team-dialog';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isCollapsed, setIsCollapsed] = useState(!isDesktop);

  useEffect(() => {
    setIsCollapsed(!isDesktop);
  }, [isDesktop]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const personalLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/tasks', label: 'My Tasks', icon: KanbanSquare },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  const teams = [
    { id: 'team-1', name: 'Team Alpha', avatar: 'https://github.com/shadcn.png' },
    { id: 'team-2', name: 'Team Beta', avatar: 'https://github.com/shadcn.png' },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={`flex flex-col border-r bg-background transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="flex items-center justify-between p-2 border-b">
            {!isCollapsed && <h1 className="font-semibold text-lg">Project T</h1>}
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
            </Button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-4">
            <div>
              <h2 className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider ${isCollapsed ? 'text-center' : 'px-2'}`}>Personal</h2>
              <div className="space-y-1 mt-2">
                {personalLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
                              <link.icon className="h-4 w-4" />
                              {!isCollapsed && <span className="ml-2">{link.label}</span>}
                            </Button>
                        </TooltipTrigger>
                        {isCollapsed && <TooltipContent side="right">{link.label}</TooltipContent>}
                    </Tooltip>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider ${isCollapsed ? 'text-center' : 'px-2'}`}>Teams</h2>
              <div className="space-y-1 mt-2">
                <CreateTeamDialog />
                {teams.map((team) => (
                   <Link href={`/teams/${team.id}`} key={team.id}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={team.avatar} alt={team.name} />
                                <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              {!isCollapsed && <span className="ml-2">{team.name}</span>}
                            </Button>
                        </TooltipTrigger>
                        {isCollapsed && <TooltipContent side="right">{team.name}</TooltipContent>}
                    </Tooltip>
                  </Link>
                ))}
              </div>
            </div>
        </nav>
        <div className="mt-auto p-2 border-t">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        {!isCollapsed && <span className="ml-2 font-semibold">User Name</span>}
                    </Button>
                </TooltipTrigger>
                {isCollapsed && <TooltipContent side="right">User Name</TooltipContent>}
            </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  );
}

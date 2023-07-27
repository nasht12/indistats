"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Population",
    href: "/population",
    description:
      "Population statistics for the India, including maps and charts.",
  },
  {
    title: "GDP",
    href: "/gdp",
    description: "GDP statistics for the India, including maps and charts.",
  },
  {
    title: "Unemployment",
    href: "/unemployment",
    description:
      "Unemployment statistics for the India, including maps and charts.",
  },
  {
    title: "Inflation",
    href: "/inflation",
    description:
      "Inflation statistics for the India, including maps and charts.",
  },
  {
    title: "Interest Rates",
    href: "interestrates",
    description:
      "Interest Rates statistics for the India, including maps and charts.",
  },
  {
    title: "Revenue and Expenditure",
    href: "/revenue",
    description:
      "Revenue and Expenditure statistics for the India, including maps and charts.",
  },
];

export function NavigationMenuDemo() {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState<HTMLElement | null>(null);
  return (
    <NavigationMenu className="bg-blue-50 min-w-full flex" onValueChange={setValue}>
      <NavigationMenuList ref={setList} className="menu-list flex justify-start">
        <NavigationMenuItem className="text-left">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              India Stats
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Topics</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-3 p-6 bg-white md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.indiaMedium className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      India Stats
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Exploration of data relevant to India&apos;s government,
                      economy, and society.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="People and Society" />
              <ListItem href="/docs/installation" title="Economy" />
              <ListItem
                href="/docs/primitives/typography"
                title="Security and Wellbeing"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Visualizations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] bg-white gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <div className="hover:bg-accent hover:text-accent-foreground">
                    {component.description}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Data Sources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:underline">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

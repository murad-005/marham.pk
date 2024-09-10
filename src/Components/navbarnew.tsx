


import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "../Components/ui/navigation-menu"
import { Button } from "../Components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../Components/ui/avatar"
import Image from "next/image"
export function Navbarnew() {
  return (
    <header className="bg-white navbar navbar-expand-lg navbar-light box-shadow-sm top-sticky d-md-block d-lg-block">
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
      <Image src = {"/Public/marhamlogo.png"} alt="logo" width={20} height={20}/>
        <span className="sr-only">MARHAM</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Doctors</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Upgrade your reporting with advanced analytics.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Extend your application with our developer tools.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Security &amp; Compliance
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Keep your data secure with our security features.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Scale your application with our infrastructure.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[550px] grid-cols-2 p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Blog Posts</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Case Studies</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Read our customer case studies.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Documentation</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Learn how to use our product.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Help Center</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get help with our product.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Pricing
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">About Us</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Learn more about our company.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Careers</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Join our team and grow with us.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">Contact Us</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get in touch with our team.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

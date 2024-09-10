
"Use Client"

import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Searchdocs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Find the Right Doctor for You</h1>
          <p className="text-muted-foreground md:text-xl">
            Search for doctors by location, specialty, or name. Book appointments and manage your healthcare.
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 relative">
              <Input type="text" placeholder="Enter a location" className="pl-8 pr-4 h-12 rounded-md w-full" />
              <LocateIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 relative">
              <Input type="text" placeholder="Search for a doctor" className="pl-8 pr-4 h-12 rounded-md w-full" />
              <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <Button type="submit" className="h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

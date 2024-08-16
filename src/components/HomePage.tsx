"use state";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogActionWithIcon,
} from "@/components/ui/alert-dialog";
import { AiOutlineClose } from "react-icons/ai";
import {
  AspectRatio,
  aspectRatioVariants,
  defaultAspectRatio,
} from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogImage,
  DialogSeparator,
  DialogSubHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuDivider,
  DropdownMenuFooter,
  DropdownMenuGroup,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuPortal,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardContentVariant,
  HoverCardFooter,
  HoverCardHeader,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  CornerPopover,
  DynamicPopover,
  HoverPopover,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TitlePopover,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import {
  ChevronLeft,
  ChevronRight,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";

const tabData = [
  {
    id: "description",
    label: "Description",
    content: "This is the description content.",
  },
  {
    id: "features",
    label: "Features",
    content: "This is the features content.",
  },
  { id: "pricing", label: "Pricing", content: "This is the pricing content." },
];

export default function HomePage() {
  function saveAction(): void {
    throw new Error("Function not implemented.");
  }

  function logout(): void {
    throw new Error("Function not implemented.");
  }
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [valueNew, setValueNew] = useState(40);
  const [valueNum, setValueNum] = useState(0);
  const [gender, setGender] = useState("");
  const [theme, setTheme] = useState("light");
  const [satisfaction, setSatisfaction] = useState("");
  const [filter, setFilter] = useState("price");
  const [filterNew, setFilterNew] = useState("price");
  const [size, setSize] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [volume, setVolume] = useState([50]);
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [brightness, setBrightness] = useState([75]);
  const [speed, setSpeed] = useState([1]);
  const items = Array.from({ length: 100 }, (_, index) => index);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleChangeNew = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  const handleTogglethree = () => {
    setIsPrivate(!isPrivate);
  };

  const handleToggleTwo = () => {
    setIsActive(!isActive);
  };

  const handleToggleOne = () => {
    setEnabled(!enabled);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleViewModeChange = (value: string) => {
    setViewMode(value);
    // Aquí podrías agregar lógica para cambiar la vista
  };

  const handleSizeChange = (value: string) => {
    setSize(value);
  };

  const handleFilterChange = (value: string) => {
    setFilterNew(value);
    // Aquí podrías agregar lógica para filtrar productos
  };

  const handleSurveyChange = (value: string) => {
    setSatisfaction(value);
  };

  const handleSubmitNew = () => {
    console.log("Customer Satisfaction:", satisfaction);
  };

  const handleFilterChangeNew = (value: string) => {
    setFilter(value);
    // Aquí podrías agregar lógica para filtrar productos
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const increment = () => setValueNum((prev) => Math.min(prev + 10, 100));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure that the input value is a number between 0 and 100
    const newValue = Math.min(Math.max(Number(e.target.value), 0), 100);
    setValueNum(newValue);
  };

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Handle successful submission here
    }
  };

  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* botones start */}
        <Button variant="default" size="default">
          Default
        </Button>
        <Button variant="destructive" size="default">
          Delete
        </Button>
        <Button variant="outline" size="default">
          Outline
        </Button>
        <Button variant="secondary" size="default">
          Secondary
        </Button>
        <Button variant="ghost" size="default">
          Ghost
        </Button>
        <Button variant="link" size="default">
          Link
        </Button>
        <Button variant="default" size="sm">
          Small Default
        </Button>
        <Button variant="default" size="lg">
          Large Default
        </Button>
        <Button variant="default" size="icon">
          {/* IconName */}
        </Button>
        <Button variant="success" size="default">
          Success
        </Button>
        <Button variant="info" size="default">
          Info
        </Button>
        <Button variant="warning" size="default">
          Warning
        </Button>
        <Button variant="loading" size="default" disabled>
          {/*spiner*/} Loading
        </Button>
        <Button variant="active" size="default">
          Active
        </Button>
        <Button variant="inactive" size="default">
          Inactive
        </Button>
        <Button variant="blurred" size="default">
          Blurred
        </Button>
        <Button variant="gradient" size="default">
          Gradient
        </Button>
        <Button variant="rounded" size="default">
          Rounded
        </Button>
        <Button variant="smooth" size="default">
          Smooth
        </Button>
        <Button variant="shadow" size="default">
          Shadow
        </Button>
        <Button variant="doubleBorder" size="default">
          Double Border
        </Button>
        <Button variant="inverse" size="default">
          Inverse
        </Button>
        <Button variant="hidden" size="default" style={{ display: "none" }}>
          Hidden
        </Button>
        <Button variant="connectivity" size="default">
          Connect
        </Button>
        <Button variant="translucent" size="default">
          Translucent
        </Button>
        <Button variant="outlinedShadow" size="default">
          Outlined Shadow
        </Button>
        <Button variant="neon" size="default">
          Neon
        </Button>
        <Button variant="retro" size="default">
          Retro
        </Button>
        <Button variant="danger" size="xl">
          Danger XL
        </Button>
        <Button variant="cool" size="xxl">
          Cool XXL
        </Button>
        <Button variant="cancel" size="sm">
          Danger XL
        </Button>
        <Button variant="delete" size="sm">
          Cool XXL
        </Button>
        {/* botones end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* alertas start */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="default" className="px-4 py-2 text-lg">
              Open Alert
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Alert Title</AlertDialogTitle>
              <AlertDialogDescription>
                This is an example of an alert dialog description.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="danger" size="sm">
              Eliminar Cuenta
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente
                tu cuenta y todos tus datos.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "danger" })}
              >
                Confirmar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="danger" size="sm">
              Eliminar Archivo
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Eliminar Archivo</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Deseas eliminar este archivo permanentemente?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className={buttonVariants({ variant: "outline" })}
              >
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "destructive" })}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="cool" size="sm">
              Eliminar Proyecto
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-red-50 border-red-500">
            <AlertDialogHeader className="text-red-700">
              <AlertDialogTitle>Advertencia</AlertDialogTitle>
              <AlertDialogDescription>
                Estás a punto de eliminar este proyecto. Esta acción no se puede
                deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className={buttonVariants({ variant: "cancel" })}
              >
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "delete" })}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="warning" size="sm">
              Desactivar Cuenta
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-800 text-white border-gray-700">
            <AlertDialogHeader className="text-white">
              <AlertDialogTitle>Desactivar Cuenta</AlertDialogTitle>
              <AlertDialogDescription>
                Estás a punto de desactivar tu cuenta. Esto no eliminará tu
                cuenta, pero no podrás acceder a los servicios hasta que la
                reactives.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction className="bg-yellow-500 text-white hover:bg-yellow-600">
                Desactivar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="active" size="sm">
              Acciones Múltiples
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Elige una acción</AlertDialogTitle>
              <AlertDialogDescription>
                Puedes elegir entre múltiples acciones a continuación:
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-blue-500 text-white hover:bg-blue-600">
                Guardar
              </AlertDialogAction>
              <AlertDialogAction className="bg-green-500 text-white hover:bg-green-600">
                Publicar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="default" size="sm">
              Open Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogActionWithIcon icon={AiOutlineClose}>
                Close
              </AlertDialogActionWithIcon>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* alertas end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* image radio start */}
        <AspectRatio className={defaultAspectRatio}>
          <img src="/image.jpg" alt="Example" className="object-cover" />
        </AspectRatio>
        <AspectRatio className={aspectRatioVariants.custom(4, 3)}>
          <img
            src="/another-image.jpg"
            alt="Another Example"
            className="object-cover"
          />
        </AspectRatio>
        {/* image radio end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/*avatar start*/}
        <Avatar className="border border-gray-300" size="small">
          <AvatarImage src="/image.jpg" alt="User Avatar" />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
        <Avatar className="border border-gray-500" size="medium">
          <AvatarImage src="/image.jpg" alt="Another User Avatar" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <Avatar className="border border-gray-700" size="large">
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        {/* avatar end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* badge start */}
        <Badge variant="default" className="text-white">
          Default Badge
        </Badge>
        <Badge variant="secondary" className="text-white">
          Secondary Badge
        </Badge>
        <Badge variant="destructive" className="text-white">
          Destructive Badge
        </Badge>
        <Badge variant="outline" className="border-gray-300 text-gray-700">
          Outline Badge
        </Badge>
        <Badge variant="default" className="bg-blue-500 text-white">
          Custom Badge
        </Badge>
        {/* badge end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* calendar start */}
        <Calendar />
        <Calendar className="bg-slate-400" />

        <Calendar showOutsideDays={false} />
        <Calendar
          components={{
            IconLeft: ({ ...props }) => (
              <ChevronLeft className="h-4 w-4 text-red-500" />
            ),
            IconRight: ({ ...props }) => (
              <ChevronRight className="h-4 w-4 text-red-500" />
            ),
          }}
        />
        <Calendar
          classNames={{
            months: "bg-gray-100",
            month: "border rounded-lg",
            cell: "p-2 hover:bg-blue-500",
          }}
        />
        <Calendar selected={new Date(2024, 7, 1)} />
        <Calendar selected={[new Date(2024, 7, 1), new Date(2024, 7, 15)]} />
        <Calendar disabled={[new Date(2024, 7, 1), new Date(2024, 7, 2)]} />
        <Calendar
          components={{
            IconLeft: ({ ...props }) => (
              <ChevronLeft className="h-4 w-4 text-green-500" />
            ),
            IconRight: ({ ...props }) => (
              <ChevronRight className="h-4 w-4 text-green-500" />
            ),
          }}
        />
        <Calendar
          classNames={{
            month: "text-center text-2xl font-bold",
            day: "text-lg p-2 hover:bg-gray-200",
          }}
        />
        <Calendar
          classNames={{
            day_selected: "bg-blue-500 text-white",
            day_today: "bg-yellow-200 text-black",
            day_outside: "text-gray-400",
          }}
        />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 15),
          }}
          classNames={{
            day_range_end: "bg-green-200",
            day_selected: "bg-blue-500 text-white",
          }}
        />
        <Calendar mode="single" selected={new Date(2024, 7, 1)} />
        <Calendar
          mode="multiple"
          selected={[new Date(2024, 7, 1), new Date(2024, 7, 15)]}
        />
        <div>
          <Calendar
            className="border p-4"
            classNames={{
              day_disabled: "text-red-500",
            }}
          />
          <p className="text-red-500">Algunas fechas están deshabilitadas.</p>
        </div>
        <Calendar style={{ width: "300px", height: "auto" }} />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 10),
          }}
          onSelect={(range) => console.log("Selected range:", range)}
        />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 10),
          }}
          disabled={{ from: new Date(2024, 6, 1), to: new Date(2024, 7, 31) }}
          classNames={{
            day_disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
          }}
        />
        <Calendar
          mode="single"
          selected={new Date(2024, 7, 1)}
          classNames={{
            nav_button_previous: "bg-blue-500 text-white",
            nav_button_next: "bg-blue-500 text-white",
          }}
        />
        <Calendar
          mode="multiple"
          selected={[new Date(2024, 7, 1), new Date(2024, 7, 15)]}
          disabled={[new Date(2024, 7, 5), new Date(2024, 7, 20)]}
          classNames={{
            day_disabled: "bg-red-300 text-red-500",
          }}
        />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 10),
          }}
          classNames={{
            day_today: "bg-yellow-300 text-yellow-800",
            day_selected: "bg-green-500 text-white",
          }}
        />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 10),
          }}
          onDayClick={(day) => alert(`Clicked on ${day.toDateString()}`)}
        />
        <Calendar
          mode="range"
          selected={{
            from: new Date(2024, 7, 1),
            to: new Date(2024, 7, 10),
          }}
          showOutsideDays={false}
        />
        <Calendar
          mode="single"
          selected={new Date(2024, 7, 1)}
          classNames={{
            caption_label: "text-lg font-bold text-red-500",
          }}
        />
        <Calendar
          mode="multiple"
          selected={[new Date(2024, 7, 1), new Date(2024, 7, 15)]}
          onDayClick={(day) => {
            const selectedDates = [new Date(2024, 7, 1), new Date(2024, 7, 15)];
            if (
              selectedDates.some(
                (date) => date.toDateString() === day.toDateString()
              )
            ) {
              alert("Date is already selected");
            } else {
              alert("Date added to selection");
            }
          }}
        />
        {/* calendar end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* card start */}
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              This is a description of the card. It provides additional context.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is the main content of the card. It can include text, images,
              or other elements.
            </p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Action</button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              This card includes an image and text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src="/image.jpg" alt="Example" className="w-full rounded-lg" />
            <p>Additional content can go here, alongside the image.</p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Learn More</button>
          </CardFooter>
        </Card>
        <Card className="bg-blue-500 text-white shadow-lg">
          <CardHeader className="bg-blue-700 p-4">
            <CardTitle className="text-xl">Custom Card Title</CardTitle>
            <CardDescription className="text-sm">
              This card has custom styling and background color.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <p>
              The content area is styled differently to match the card's custom
              theme.
            </p>
          </CardContent>
          <CardFooter className="bg-blue-700 p-4">
            <button className="btn btn-light">Read More</button>
          </CardFooter>
        </Card>
        <Card className="max-w-xs mx-auto border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Compact Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a minimal card with only a title and content.</p>
          </CardContent>
        </Card>
        <Card className="max-w-md mx-auto border rounded-lg shadow-md hover:bg-gray-100 transition">
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Click on the button below to perform an action.</p>
            <button
              className="btn btn-secondary mt-4"
              onClick={() => alert("Action performed!")}
            >
              Click Me
            </button>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Primary Action</button>
          </CardFooter>
        </Card>
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>This is a basic card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here.</p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Action</button>
          </CardFooter>
        </Card>
        <Card variant="outline" className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Outline Card</CardTitle>
            <CardDescription>This card has an outline variant.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here.</p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Learn More</button>
          </CardFooter>
        </Card>
        <Card variant="elevated" className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>This card has elevated styling.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here.</p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Read More</button>
          </CardFooter>
        </Card>
        <Card size="small" className="mx-auto">
          <CardHeader spacing="space-y-1">
            <CardTitle size="text-lg">Small Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Compact content.</p>
          </CardContent>
        </Card>
        <Card className="max-w-md mx-auto border rounded-lg shadow-md hover:bg-gray-100 transition">
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Click on the button below to perform an action.</p>
            <button
              className="btn btn-secondary mt-4"
              onClick={() => alert("Action performed!")}
            >
              Click Me
            </button>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Primary Action</button>
          </CardFooter>
        </Card>

        {/* card end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* checkbox start */}
        <div className="flex items-center space-x-2">
          <Checkbox id="option1" />
          <label htmlFor="option1" className="text-sm">
            Option 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="subscribe" />
          <label htmlFor="subscribe" className="text-sm">
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <label htmlFor="disabled" className="text-sm text-gray-500">
            Disabled Option
          </label>
        </div>{" "}
        <form className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="acceptTerms" name="acceptTerms" />
            <label htmlFor="acceptTerms" className="text-sm">
              I accept the terms and conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="optionA" name="options" />
            <label htmlFor="optionA" className="text-sm">
              Option A
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="optionB" name="options" />
            <label htmlFor="optionB" className="text-sm">
              Option B
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="optionC" name="options" />
            <label htmlFor="optionC" className="text-sm">
              Option C
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="custom"
            className="border-blue-500 checked:bg-blue-500 checked:text-white"
          />
          <label htmlFor="custom" className="text-sm">
            Custom Styled Checkbox
          </label>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Checkbox id="item1" name="items" />
            <label htmlFor="item1" className="text-sm">
              Item 1
            </label>
          </li>
          <li className="flex items-center space-x-2">
            <Checkbox id="item2" name="items" />
            <label htmlFor="item2" className="text-sm">
              Item 2
            </label>
          </li>
          <li className="flex items-center space-x-2">
            <Checkbox id="item3" name="items" />
            <label htmlFor="item3" className="text-sm">
              Item 3
            </label>
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <Checkbox id="basic" />
          <label htmlFor="basic" className="text-sm">
            Basic Checkbox
          </label>
        </div>{" "}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="default" variant="default" />
            <label htmlFor="default" className="text-sm">
              Default
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="outline" variant="outline" />
            <label htmlFor="outline" className="text-sm">
              Outline
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="error" variant="error" />
            <label htmlFor="error" className="text-sm">
              Error
            </label>
          </div>
        </div>{" "}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="sm" size="sm" />
            <label htmlFor="sm" className="text-sm">
              Small
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="md" size="md" />
            <label htmlFor="md" className="text-sm">
              Medium
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="lg" size="lg" />
            <label htmlFor="lg" className="text-sm">
              Large
            </label>
          </div>
        </div>
        {/* checkbox end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* command start */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Buscar en todo</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Buscar en todo..." />
              <CommandList>
                <CommandItem>Configuración</CommandItem>
                <CommandItem>Usuarios</CommandItem>
                <CommandItem>Documentos</CommandItem>
                <CommandEmpty>No se encontraron resultados</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Navegar a...</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Navegar a..." />
              <CommandList>
                <CommandItem>Inicio</CommandItem>
                <CommandItem>Perfil</CommandItem>
                <CommandItem>Configuración</CommandItem>
                <CommandEmpty>No se encontraron páginas</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Ejecutar acción</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Ejecutar acción..." />
              <CommandList>
                <CommandItem onClick={() => saveAction()}>Guardar</CommandItem>
                <CommandItem onClick={() => Function()}>Deshacer</CommandItem>
                <CommandItem onClick={() => logout()}>
                  Cerrar sesión
                </CommandItem>
                <CommandEmpty>No hay acciones disponibles</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Filtrar productos</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Filtrar productos..." />
              <CommandList>
                <CommandItem>Categoría: Electrónica</CommandItem>
                <CommandItem>Precio: $100 - $500</CommandItem>
                <CommandItem>Calificación: 4 estrellas y más</CommandItem>
                <CommandEmpty>No se encontraron filtros</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Ver atajos de teclado</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Buscar atajo..." />
              <CommandList>
                <CommandItem>
                  <span>Guardar</span>
                  <CommandShortcut>Cmd+S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Abrir</span>
                  <CommandShortcut>Cmd+O</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Cerrar</span>
                  <CommandShortcut>Cmd+W</CommandShortcut>
                </CommandItem>
              </CommandList>
              <CommandEmpty>No se encontraron atajos</CommandEmpty>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Gestionar tareas</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Gestionar tareas..." />
              <CommandList>
                <CommandItem>Añadir tarea</CommandItem>
                <CommandItem>Completar tarea</CommandItem>
                <CommandItem>Eliminar tarea</CommandItem>
                <CommandEmpty>No hay tareas disponibles</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Nuevo Comando 1</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Nuevo Comando 1..." />
              <CommandList>
                <CommandItem>Opción 1</CommandItem>
                <CommandItem>Opción 2</CommandItem>
                <CommandItem>Opción 3</CommandItem>
                <CommandEmpty>No se encontraron opciones</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Nuevo Comando 2</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Nuevo Comando 2..." />
              <CommandList>
                <CommandItem>Opción A</CommandItem>
                <CommandItem>Opción B</CommandItem>
                <CommandItem>Opción C</CommandItem>
                <CommandEmpty>No se encontraron opciones</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="btn btn-primary">Nuevo Comando 3</button>
          </DialogTrigger>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command className="h-full w-full">
              <CommandInput placeholder="Nuevo Comando 3..." />
              <CommandList>
                <CommandItem>Acción X</CommandItem>
                <CommandItem>Acción Y</CommandItem>
                <CommandItem>Acción Z</CommandItem>
                <CommandEmpty>No se encontraron acciones</CommandEmpty>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        {/* command end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* contextmenu start */}
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-200">Right click me!</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onSelect={() => alert("Option 1 clicked!")}>
              Option 1
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => alert("Option 2 clicked!")}>
              Option 2
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-300">Right click for more options!</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem onSelect={() => alert("Cut")}>
                Cut
              </ContextMenuItem>
              <ContextMenuItem onSelect={() => alert("Copy")}>
                Copy
              </ContextMenuItem>
              <ContextMenuItem onSelect={() => alert("Paste")}>
                Paste
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem onSelect={() => alert("Delete")}>
                Delete
              </ContextMenuItem>
              <ContextMenuItem onSelect={() => alert("Rename")}>
                Rename
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-400">Right click for file options!</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onSelect={() => alert("New File")}>
              New File
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem onSelect={() => alert("Save As")}>
                  Save As
                </ContextMenuItem>
                <ContextMenuItem onSelect={() => alert("Export")}>
                  Export
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>{" "}
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-500">Right click for settings!</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuCheckboxItem
              checked={true}
              onCheckedChange={(checked) =>
                console.log("Notifications", checked)
              }
            >
              Enable Notifications
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={false}
              onCheckedChange={(checked) => console.log("Dark Mode", checked)}
            >
              Dark Mode
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-600">
              Right click for radio options!
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuRadioGroup
              value="option1"
              onValueChange={(value) => console.log("Radio selected:", value)}
            >
              <ContextMenuRadioItem value="option1">
                Option 1
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="option2">
                Option 2
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>{" "}
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="p-4 bg-gray-700">Right click for shortcuts!</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onSelect={() => alert("Copy")}>
              Copy <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => alert("Paste")}>
              Paste <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        {/* contextmenu end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* dialog end */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Open Dialog
            </button>
          </DialogTrigger>
          contenido del dialog
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a description for the dialog.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Open Form Dialog
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Form Dialog</DialogTitle>
              <DialogDescription>
                Fill out the form below to submit your information.
              </DialogDescription>
            </DialogHeader>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded">
                    Cancel
                  </button>
                </DialogClose>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded">
              Open Confirmation Dialog
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Do you really want to delete this item? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-gray-500 text-white rounded">
                  Cancel
                </button>
              </DialogClose>
              <button className="px-4 py-2 bg-red-500 text-white rounded">
                Delete
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-purple-500 text-white rounded">
              View Image
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Beautiful Landscape</DialogTitle>
              <DialogDescription>
                A breathtaking view of the mountains during sunset.
              </DialogDescription>
            </DialogHeader>
            <img
              src="https://i.pinimg.com/564x/ac/62/e5/ac62e5a61c64c6deb0b9742812ffec92.jpg"
              alt="Landscape"
              className="rounded-md"
            />
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-gray-500 text-white rounded">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded">
              Read Terms
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms and Conditions</DialogTitle>
              <DialogDescription>
                Please read and accept the terms and conditions.
              </DialogDescription>
            </DialogHeader>
            <div className="h-64 overflow-y-auto p-2 border">
              <p>Extensive content goes here...</p>
              <p>(Much more text about terms and conditions)</p>
              <p>(Additional legal information)</p>
              <p>...</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-gray-500 text-white rounded">
                  Decline
                </button>
              </DialogClose>
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Accept
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-teal-500 text-white rounded">
              Choose Option
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select an Option</DialogTitle>
              <DialogDescription>
                Please choose one of the following options.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Option 1
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Option 2
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded">
                Option 3
              </button>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-gray-500 text-white rounded">
                  Cancel
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">
              Enter Email
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Email Address</DialogTitle>
              <DialogDescription>
                Please enter your email address to proceed.
              </DialogDescription>
            </DialogHeader>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-md"
              placeholder="you@example.com"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <DialogFooter>
              <DialogClose asChild>
                <button className="px-4 py-2 bg-gray-500 text-white rounded">
                  Cancel
                </button>
              </DialogClose>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 bg-pink-500 text-white rounded">
              Start Wizard
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{`Step ${step} of 3`}</DialogTitle>
              <DialogDescription>
                Follow the steps to complete the process.
              </DialogDescription>
            </DialogHeader>
            {step === 1 && <p>This is the content for step 1.</p>}
            {step === 2 && <p>This is the content for step 2.</p>}
            {step === 3 && <p>This is the content for step 3.</p>}
            <DialogFooter>
              {step > 1 && (
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              ) : (
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-green-500 text-white rounded">
                    Finish
                  </button>
                </DialogClose>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="btn-primary">Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Are you sure you want to proceed with this action? This cannot be
              undone.
            </DialogDescription>
            <DialogActions>
              <button className="btn-primary">Confirm</button>
              <DialogClose className="btn-secondary">Cancel</DialogClose>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="btn-primary">Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms and Conditions</DialogTitle>
            </DialogHeader>
            <DialogSeparator />
            <DialogDescription>
              Please read and accept the terms and conditions before proceeding.
            </DialogDescription>
            <DialogActions>
              <DialogClose className="btn-secondary">Decline</DialogClose>
              <button className="btn-primary">Accept</button>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="btn-primary">Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Picture of the Day</DialogTitle>
            </DialogHeader>
            <DialogImage src="/image.jpg" alt="image" />
            <DialogDescription>
              Here is a beautiful landscape picture taken today. Enjoy the view!
            </DialogDescription>
            <DialogActions>
              <DialogClose className="btn-secondary">Close</DialogClose>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="btn-primary">Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogIcon>⚠️</DialogIcon>
              <DialogTitle>Warning</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              You are about to delete an item. This action cannot be undone.
            </DialogDescription>
            <DialogActions>
              <button className="btn-primary">Delete</button>
              <DialogClose className="btn-secondary">Cancel</DialogClose>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="btn-primary">Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome Back!</DialogTitle>
              <DialogSubHeader>We're glad to see you again</DialogSubHeader>
            </DialogHeader>
            <DialogDescription>
              Please confirm your identity to continue.
            </DialogDescription>
            <DialogActions>
              <button className="btn-primary">Confirm</button>
              <DialogClose className="btn-secondary">Cancel</DialogClose>
            </DialogActions>
          </DialogContent>
        </Dialog>
        {/* dialog end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Dropdown start */}
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            Options
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            File
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New File</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Open Recent</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Project A</DropdownMenuItem>
                <DropdownMenuItem>Project B</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Save</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            View Options
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>
              Show Line Numbers
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Enable Word Wrap
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="light">
              <DropdownMenuRadioItem value="light">
                Light Theme
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">
                Dark Theme
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">
                System Theme
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            Edit
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Undo
              <DropdownMenuShortcut>Ctrl+Z</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Redo
              <DropdownMenuShortcut>Ctrl+Y</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Cut
              <DropdownMenuShortcut>Ctrl+X</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Copy
              <DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Paste
              <DropdownMenuShortcut>Ctrl+V</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            Account
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            Tools
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              <DropdownMenuItem>Tool 1</DropdownMenuItem>
              <DropdownMenuItem>Tool 2</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Tool 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="btn-primary">
            Options
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>General Settings</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Advanced Settings</DropdownMenuLabel>
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuHeader>Configuración</DropdownMenuHeader>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Notificaciones</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuHeader>Cuenta</DropdownMenuHeader>
            <DropdownMenuItem>Facturación</DropdownMenuItem>
            <DropdownMenuItem>Seguridad</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Notificaciones</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuFooter>
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuFooter>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <DropdownMenuItemIcon>
                <UserIcon />
              </DropdownMenuItemIcon>
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenuItemIcon>
                <SettingsIcon />
              </DropdownMenuItemIcon>
              Configuración
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Notificaciones</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>Menu</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLinkItem href="/profile">Perfil</DropdownMenuLinkItem>
            <DropdownMenuLinkItem href="/settings">
              Configuración
            </DropdownMenuLinkItem>
            <DropdownMenuDivider />
            <DropdownMenuLinkItem href="/logout">
              Cerrar sesión
            </DropdownMenuLinkItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Dropdown end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* hover card end */}
        <HoverCard>
          <HoverCardTrigger>
            <button className="hover:bg-gray-100 p-2 rounded-md shadow-md">
              John Doe
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">John Doe</p>
              <p>Email: johndoe@example.com</p>
              <p>Role: Admin</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <img
              src="/image.jpg"
              alt="Product Name"
              className="cursor-pointer w-10 h-10"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">Product Name</p>
              <p>$99.99</p>
              <p>Description: This is a great product that you will love!</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <h3 className="cursor-pointer text-blue-500 hover:underline">
              Understanding React Hooks
            </h3>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p>Published on: August 15, 2024</p>
              <p>By: Jane Smith</p>
              <p>
                In this article, we will dive deep into the world of React
                Hooks, exploring how they can make your functional components
                more powerful...
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        <HoverCard>
          <HoverCardTrigger>
            <button className="hover:bg-gray-100 p-2 rounded-md shadow-md">
              E-commerce Website
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">E-commerce Website</p>
              <p>Tech Stack: React, Node.js, MongoDB</p>
              <p>
                A fully-featured e-commerce platform with user authentication,
                payment integration, and real-time chat support.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        <HoverCard>
          <HoverCardTrigger>
            <img
              src="/image.jpg"
              alt="Achievement Badge"
              className="cursor-pointer w-10 h-10"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">Top Contributor</p>
              <p>
                Awarded for contributing over 100 high-quality posts to the
                community.
              </p>
              <p>Date Earned: July 2024</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <button className="hover:bg-gray-100 p-2 rounded-md shadow-md">
              Premium Support
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">Premium Support</p>
              <p>Get 24/7 priority access to our customer support team.</p>
              <p>Includes faster response times, dedicated agents, and more.</p>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        <HoverCard>
          <HoverCardTrigger>
            <div className="cursor-pointer">📍</div>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">Central Park</p>
              <p>New York, NY, USA</p>
              <p>A large public park in New York City, covering 843 acres.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <img
              src="/image.jpg"
              alt="Video Title"
              className="cursor-pointer w-10 h-10"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">How to Build a React App</p>
              <p>Duration: 10:45</p>
              <p>Views: 1.2M</p>
              <p>
                Learn the basics of building a React application from scratch in
                this step-by-step tutorial.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <img
              src="/image.jpg"
              alt="Gallery Image"
              className="cursor-pointer w-10 h-10"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p className="font-bold">Sunset Over the Mountains</p>
              <p>Taken on: July 2024</p>
              <p>Location: Rocky Mountains, CO</p>
              <p>
                A breathtaking view of the sunset over the mountains, capturing
                the vibrant colors and serene landscape.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <button className="p-2 text-white bg-blue-500 rounded-md">
              Hover me
            </button>
          </HoverCardTrigger>
          <HoverCardContentVariant variant="warning">
            <p>This is a warning message inside the hover card.</p>
          </HoverCardContentVariant>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <button className="p-2 text-white bg-blue-500 rounded-md">
              Hover me
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <HoverCardHeader>
              <h3 className="font-bold">Card Title</h3>
            </HoverCardHeader>
            <p>This is some information inside the hover card.</p>
            <HoverCardFooter>
              <button className="text-blue-500 hover:underline">
                Learn More
              </button>
            </HoverCardFooter>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="btn">Hover me</button>
          </HoverCardTrigger>
          <HoverCardContentVariant variant="info">
            This is an info variant hover card.
          </HoverCardContentVariant>
          <HoverCardContentVariant variant="warning">
            This is a warning variant hover card.
          </HoverCardContentVariant>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="btn">Hover me</button>
          </HoverCardTrigger>
          <HoverCardContentVariant variant="info">
            <HoverCardHeader>
              <strong>Information</strong>
            </HoverCardHeader>
            <div>This is an info hover card with structured content.</div>
            <HoverCardFooter>
              <button className="btn-secondary">Learn more</button>
            </HoverCardFooter>
          </HoverCardContentVariant>
        </HoverCard>
        {/* hover card end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* input start */}
        <div>
          <label
            htmlFor="basic-input"
            className="block text-sm font-medium text-gray-700"
          >
            Basic Input
          </label>
          <Input id="basic-input" placeholder="Enter text here" />
        </div>
        <div>
          <label
            htmlFor="password-input"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password-input"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label
            htmlFor="default-value-input"
            className="block text-sm font-medium text-gray-700"
          >
            Default Value Input
          </label>
          <Input id="default-value-input" defaultValue="Default Text" />
        </div>
        <div>
          <label
            htmlFor="disabled-input"
            className="block text-sm font-medium text-gray-700"
          >
            Disabled Input
          </label>
          <Input id="disabled-input" placeholder="Disabled input" disabled />
        </div>
        <div>
          <label
            htmlFor="custom-class-input"
            className="block text-sm font-medium text-gray-700"
          >
            Custom Class Input
          </label>
          <Input
            id="custom-class-input"
            className="border-red-500"
            placeholder="Custom border color"
          />
        </div>
        <div>
          <label
            htmlFor="change-handler-input"
            className="block text-sm font-medium text-gray-700"
          >
            Input with Change Handler
          </label>
          <Input
            id="change-handler-input"
            value={value}
            onChange={handleChange}
            placeholder="Type something..."
          />
          <p className="mt-2">Current Value: {value}</p>
        </div>
        <div>
          <label
            htmlFor="placeholder-input"
            className="block text-sm font-medium text-gray-700"
          >
            Input with Placeholder
          </label>
          <Input id="placeholder-input" placeholder="This is a placeholder" />
        </div>
        <div>
          <label
            htmlFor="default-input"
            className="block text-sm font-medium text-gray-700"
          >
            Default Input
          </label>
          <Input id="default-input" placeholder="Default variant" />
        </div>{" "}
        <div>
          <label
            htmlFor="primary-input"
            className="block text-sm font-medium text-gray-700"
          >
            Primary Input
          </label>
          <Input
            id="primary-input"
            variant="primary"
            placeholder="Primary variant"
          />
        </div>{" "}
        <div>
          <label
            htmlFor="secondary-input"
            className="block text-sm font-medium text-gray-700"
          >
            Secondary Input
          </label>
          <Input
            id="secondary-input"
            variant="secondary"
            placeholder="Secondary variant"
          />
        </div>{" "}
        <div>
          <label
            htmlFor="error-input"
            className="block text-sm font-medium text-gray-700"
          >
            Error Input
          </label>
          <Input id="error-input" variant="error" placeholder="Error variant" />
        </div>{" "}
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Success Input
          </label>
          <Input
            id="success-input"
            variant="success"
            placeholder="Success variant"
          />
        </div>
        <div>
          <label
            htmlFor="default-input"
            className="block text-sm font-medium text-gray-700"
          >
            Default Input
          </label>
          <Input id="default-input" placeholder="Default variant" />
        </div>
        <div>
          <label
            htmlFor="primary-input"
            className="block text-sm font-medium text-gray-700"
          >
            Primary Input
          </label>
          <Input
            id="primary-input"
            variant="primary"
            size="large"
            placeholder="Primary variant"
          />
        </div>{" "}
        <div>
          <label
            htmlFor="rounded-input"
            className="block text-sm font-medium text-gray-700"
          >
            Rounded Input
          </label>
          <Input
            id="rounded-input"
            variant="rounded"
            size="small"
            placeholder="Rounded variant"
          />
        </div>
        <div>
          <label
            htmlFor="outline-input"
            className="block text-sm font-medium text-gray-700"
          >
            Outline Input
          </label>
          <Input
            id="outline-input"
            variant="outline"
            size="medium"
            placeholder="Outline variant"
          />
        </div>{" "}
        <div>
          <label
            htmlFor="error-input"
            className="block text-sm font-medium text-gray-700"
          >
            Error Input
          </label>
          <Input
            id="error-input"
            variant="error"
            size="large"
            placeholder="Error variant"
          />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Success Input
          </label>
          <Input
            id="success-input"
            variant="success"
            size="small"
            placeholder="Success variant"
          />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Default Input
          </label>
          <Input placeholder="Default input" />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Primary Input
          </label>
          <Input variant="primary" placeholder="Primary input" />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Error Input
          </label>
          <Input variant="error" placeholder="Error input" />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Small Input
          </label>
          <Input size="small" placeholder="Small input" />
        </div>{" "}
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Large Input
          </label>
          <Input size="large" placeholder="Large input" />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Full Width Input
          </label>
          <Input fullWidth placeholder="Full width input" />
        </div>{" "}
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Dashed Input
          </label>
          <Input variant="dashed" placeholder="Dashed input" />
        </div>
        <div>
          <label
            htmlFor="success-input"
            className="block text-sm font-medium text-gray-700"
          >
            Dark Themed Input
          </label>
          <Input variant="dark" placeholder="Dark themed input" />
        </div>
        {/* input end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* label start */}
        <div>
          <h3>Label Básico</h3>
          <Label htmlFor="input1">Nombre</Label>
          <input id="input1" type="text" placeholder="Ingrese su nombre" />
        </div>
        <div>
          <h3>Label con Clase Personalizada</h3>
          <Label htmlFor="input2" className="text-red-500">
            Correo Electrónico
          </Label>
          <input
            id="input2"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>{" "}
        <div>
          <h3>Label Deshabilitado</h3>
          <Label htmlFor="input3" className="peer-disabled:opacity-70">
            Teléfono
          </Label>
          <input
            id="input3"
            type="tel"
            placeholder="Ingrese su número de teléfono"
            disabled
          />
        </div>
        <div>
          <h3>Label con Texto Pequeño</h3>
          <Label htmlFor="input5" className="text-xs">
            Código Postal
          </Label>
          <input
            id="input5"
            type="text"
            placeholder="Ingrese su código postal"
          />
        </div>
        <div>
          <h3>Label por Defecto</h3>
          <Label htmlFor="input1">Nombre</Label>
          <input id="input1" type="text" placeholder="Ingrese su nombre" />
        </div>
        <div>
          <h3>Label Primario</h3>
          <Label htmlFor="input2" color="primary">
            Correo Electrónico
          </Label>
          <input
            id="input2"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>{" "}
        <div>
          <h3>Label Secundario</h3>
          <Label htmlFor="input3" color="secondary">
            Teléfono
          </Label>
          <input
            id="input3"
            type="tel"
            placeholder="Ingrese su número de teléfono"
          />
        </div>
        <div>
          <h3>Label de Peligro</h3>
          <Label htmlFor="input4" color="danger">
            Dirección
          </Label>
          <input id="input4" type="text" placeholder="Ingrese su dirección" />
        </div>
        <div>
          <h3>Label Grande y Ancho Completo</h3>
          <Label htmlFor="input5" size="lg" fullWidth>
            Código Postal
          </Label>
          <input
            id="input5"
            type="text"
            placeholder="Ingrese su código postal"
          />
        </div>
        <div>
          <h3>Label por Defecto</h3>
          <Label htmlFor="input1" color="default">
            Nombre
          </Label>
          <input id="input1" type="text" placeholder="Ingrese su nombre" />
        </div>
        <div>
          <h3>Label Primario Grande</h3>
          <Label htmlFor="input2" color="primary" size="lg">
            Correo Electrónico
          </Label>
          <input
            id="input2"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div>
          <h3>Label de Éxito Extra Grande</h3>
          <Label htmlFor="input3" color="success" size="xl">
            Teléfono
          </Label>
          <input
            id="input3"
            type="tel"
            placeholder="Ingrese su número de teléfono"
          />
        </div>
        <div>
          <h3>Label de Advertencia Tamaño Base</h3>
          <Label htmlFor="input4" color="warning" size="base">
            Dirección
          </Label>
          <input id="input4" type="text" placeholder="Ingrese su dirección" />
        </div>
        <div>
          <h3>Label de Peligro 2XL y Ancho Completo</h3>
          <Label htmlFor="input5" color="danger" size="2xl" fullWidth>
            Código Postal
          </Label>
          <input
            id="input5"
            type="text"
            placeholder="Ingrese su código postal"
          />
        </div>
        {/* label end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* navigation menu start */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#section1">
                  Section 1
                </NavigationMenuLink>
                <NavigationMenuLink href="#section2">
                  Section 2
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#section3">
                  Section 3
                </NavigationMenuLink>
                <NavigationMenuLink href="#section4">
                  Section 4
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger size="large" color="primary">
                Main Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#home">Home</NavigationMenuLink>
                <NavigationMenuLink href="#about">About Us</NavigationMenuLink>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger size="medium" color="success">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#design">Design</NavigationMenuLink>
                <NavigationMenuLink href="#development">
                  Development
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>{" "}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger size="small" color="secondary">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#product1">
                  Product 1
                </NavigationMenuLink>
                <NavigationMenuLink href="#product2">
                  Product 2
                </NavigationMenuLink>
                <NavigationMenuLink href="#product3">
                  Product 3
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger size="large" color="danger">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#solution1">
                  Solution 1
                </NavigationMenuLink>
                <NavigationMenuLink href="#solution2">
                  Solution 2
                </NavigationMenuLink>
                <NavigationMenuLink href="#solution3">
                  Solution 3
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger size="medium" color="accent">
                Support
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#help">
                  Help Center
                </NavigationMenuLink>
                <NavigationMenuLink href="#faq">FAQs</NavigationMenuLink>
                <NavigationMenuLink href="#contact">
                  Contact Support
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger size="large" color="neutral">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#overview">
                  Overview
                </NavigationMenuLink>
                <NavigationMenuLink href="#stats">Stats</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger size="medium" color="warning">
                Account
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#profile">Profile</NavigationMenuLink>
                <NavigationMenuLink href="#settings">
                  Settings
                </NavigationMenuLink>
                <NavigationMenuLink href="#logout">Logout</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
        {/* navigation menu end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* popover start */}
        <div className="flex items-center justify-center ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Open Popover
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <p>This is the content inside the popover.</p>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                Sign Up
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="********"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-blue-600 text-white rounded-md"
                >
                  Submit
                </button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                Custom Popover
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="bg-gray-800 text-white p-6 rounded-lg"
            >
              <h3 className="font-bold text-lg">Popover Title</h3>
              <p className="text-sm">
                This is a custom-styled popover content with right alignment.
              </p>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center ">
          <nav className="p-4 bg-gray-100 flex justify-between">
            <div className="space-x-4">
              <a href="#" className="text-gray-700">
                Home
              </a>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-gray-700">More</button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="flex flex-col space-y-2">
                    <a href="#" className="text-blue-500">
                      About Us
                    </a>
                    <a href="#" className="text-blue-500">
                      Services
                    </a>
                    <a href="#" className="text-blue-500">
                      Contact
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </nav>
        </div>
        <div className="flex items-center justify-center ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-md">
                Settings
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 text-gray-800 hover:bg-gray-200 rounded"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 text-gray-800 hover:bg-gray-200 rounded"
                  >
                    Account Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 text-gray-800 hover:bg-gray-200 rounded"
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center ">
          <HoverPopover>
            <p>Este popover aparece al pasar el mouse sobre el botón.</p>
          </HoverPopover>
        </div>
        <div className="flex items-center justify-center ">
          <CornerPopover>
            <p>Este popover se alinea al inicio del trigger.</p>
          </CornerPopover>
        </div>{" "}
        <div className="flex items-center justify-center ">
          <DynamicPopover>
            <p>Este popover se alinea dinámicamente en función del trigger.</p>
            <p>El contenido puede ser tan largo como sea necesario.</p>
          </DynamicPopover>
        </div>
        <div className="flex items-center justify-center ">
          <TitlePopover>
            <div>
              <h3 className="font-bold text-lg">Título del Popover</h3>
              <p className="text-sm">
                Este es un subtítulo o información adicional.
              </p>
            </div>
          </TitlePopover>
        </div>
        <div className="flex items-center justify-center ">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Open Popover
              </button>
            </PopoverTrigger>
            <PopoverContent size="md" color="blue">
              <p>This is a basic popover with medium size and blue color.</p>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center ">
          {" "}
          <HoverPopover size="lg" color="green">
            <p>
              This popover appears on hover with large size and green color.
            </p>
          </HoverPopover>
        </div>
        <div className="flex items-center justify-center ">
          <CornerPopover size="sm" color="red">
            <p>
              This popover aligns to the start with small size and red color.
            </p>
          </CornerPopover>
        </div>
        <div className="flex items-center justify-center ">
          {" "}
          <DynamicPopover size="xl" color="purple">
            <p>
              This popover aligns dynamically with extra large size and purple
              color.
            </p>
            <p>Content can be as long as needed.</p>
          </DynamicPopover>
        </div>
        <div className="flex items-center justify-center ">
          <TitlePopover size="md" color="teal">
            <div>
              <h3 className="font-bold text-lg">Popover Title</h3>
              <p className="text-sm">
                This popover has a title and medium size with teal color.
              </p>
            </div>
          </TitlePopover>
        </div>
        {/* popover end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* proggres bar start */}
        <div className="flex flex-wrap gap-4 p-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Default Progress Bar</h3>
            <Progress
              value={valueNew}
              size="md"
              color="primary"
              type="default"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Striped Progress Bar</h3>
            <Progress
              value={valueNew}
              size="md"
              color="secondary"
              type="striped"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Animated Progress Bar</h3>
            <Progress
              value={valueNew}
              size="lg"
              color="tertiary"
              type="animated"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Small Primary Progress Bar</h3>
            <Progress
              value={valueNew}
              size="sm"
              color="primary"
              type="default"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Large Striped Secondary Progress Bar
            </h3>
            <Progress
              value={valueNew}
              size="lg"
              color="secondary"
              type="striped"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Medium Animated Tertiary Progress Bar
            </h3>
            <Progress
              value={valueNew}
              size="md"
              color="tertiary"
              type="animated"
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Basic Progress Bar</h3>
          <Progress value={50} className="bg-gray-200" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Loading Progress</h3>
          <Progress value={75} className="bg-gray-300" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Full Progress</h3>
          <Progress value={100} className="bg-gray-400" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Customized Progress Bar</h3>
          <Progress
            value={60}
            className="bg-blue-200"
            style={{ backgroundColor: "lightgray" }}
          >
            <div
              className="h-full flex-1 bg-green-500"
              style={{ transform: `translateX(-${100 - (60 || 0)}%)` }}
            />
          </Progress>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Dynamic Progress Bar</h3>
          <Progress value={valueNum} className="bg-gray-100" />
          <div className="mt-4">
            <button
              onClick={increment}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Increase Progress
            </button>
            <input
              type="number"
              value={valueNum}
              onChange={handleChange}
              min="0"
              max="100"
              className="px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Progress with Label</h3>
          <div className="relative">
            <Progress value={40} className="bg-gray-200" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-black">
              40%
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Default Progress Bar</h3>
          <Progress value={valueNew} size="md" color="primary" type="default" />
        </div>{" "}
        <div className="p-4">
          <h3 className="text-lg font-medium">Striped Progress Bar</h3>
          <Progress
            value={valueNew}
            size="md"
            color="secondary"
            type="striped"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Animated Progress Bar</h3>
          <Progress
            value={valueNew}
            size="lg"
            color="tertiary"
            type="animated"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Small Primary Progress Bar</h3>
          <Progress value={valueNew} size="sm" color="primary" type="default" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">
            Large Striped Secondary Progress Bar
          </h3>
          <Progress
            value={valueNew}
            size="lg"
            color="secondary"
            type="striped"
          />
        </div>{" "}
        <div className="p-4">
          <h3 className="text-lg font-medium">
            Medium Animated Tertiary Progress Bar
          </h3>
          <Progress
            value={valueNew}
            size="md"
            color="tertiary"
            type="animated"
          />
        </div>
        {/* proggres bar start */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* radio Group start */}
        <form>
          <label>Gender</label>
          <RadioGroup value={gender} onValueChange={handleGenderChange}>
            <RadioGroupItem value="male">Male</RadioGroupItem>
            <RadioGroupItem value="female">Female</RadioGroupItem>
            <RadioGroupItem value="other">Other</RadioGroupItem>
          </RadioGroup>
          <button type="submit">Register</button>
        </form>
        <div>
          <h3>Select Theme</h3>
          <RadioGroup value={theme} onValueChange={handleThemeChange}>
            <RadioGroupItem value="light">Light Mode</RadioGroupItem>
            <RadioGroupItem value="dark">Dark Mode</RadioGroupItem>
          </RadioGroup>
        </div>
        <div>
          <h3>How satisfied are you with our service?</h3>
          <RadioGroup value={satisfaction} onValueChange={handleSurveyChange}>
            <RadioGroupItem value="very_satisfied">
              Very Satisfied
            </RadioGroupItem>
            <RadioGroupItem value="satisfied">Satisfied</RadioGroupItem>
            <RadioGroupItem value="neutral">Neutral</RadioGroupItem>
            <RadioGroupItem value="dissatisfied">Dissatisfied</RadioGroupItem>
            <RadioGroupItem value="very_dissatisfied">
              Very Dissatisfied
            </RadioGroupItem>
          </RadioGroup>
          <button onClick={handleSubmitNew}>Submit</button>
        </div>
        <div>
          <h3>Filter Products By:</h3>
          <RadioGroup value={filterNew} onValueChange={handleFilterChangeNew}>
            <RadioGroupItem value="price">Price</RadioGroupItem>
            <RadioGroupItem value="popularity">Popularity</RadioGroupItem>
            <RadioGroupItem value="rating">Rating</RadioGroupItem>
          </RadioGroup>
        </div>
        <div>
          <h3>Select Size</h3>
          <RadioGroup value={size} onValueChange={handleSizeChange}>
            <RadioGroupItem value="small">Small</RadioGroupItem>
            <RadioGroupItem value="medium">Medium</RadioGroupItem>
            <RadioGroupItem value="large">Large</RadioGroupItem>
          </RadioGroup>
        </div>
        <div>
          <h3>View Mode</h3>
          <RadioGroup value={viewMode} onValueChange={handleViewModeChange}>
            <RadioGroupItem value="list">List View</RadioGroupItem>
            <RadioGroupItem value="grid">Grid View</RadioGroupItem>
          </RadioGroup>
        </div>
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" size="small" color="primary" />
          <RadioGroupItem value="option2" size="medium" color="secondary" />
          <RadioGroupItem value="option3" size="large" color="danger" />
        </RadioGroup>
        {/* radio Group end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* scrooll area start */}
        <div className="h-60 w-60">
          <ScrollArea>
            <div className="h-[200%] w-full bg-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quisquam cum assumenda praesentium minima quidem laudantium
              corrupti, reiciendis ex distinctio architecto eveniet, odit neque
              nulla ad tempora facere. Ipsa, vitae!
            </div>
          </ScrollArea>
        </div>
        <div className="h-60 w-60">
          <ScrollArea>
            <div className="h-[150%] w-[150%] bg-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              dolorum dicta tempora est enim commodi eos optio eveniet. Ipsam
              culpa officiis animi doloremque magni eligendi saepe nobis nemo
              ullam ab! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id et aperiam doloribus repellat excepturi ex? Dolore
              excepturi veritatis nemo cupiditate porro enim maxime tempora,
              facilis dolorum ullam natus magni aliquid!
            </div>
          </ScrollArea>
        </div>
        <div className="h-60 w-60">
          <ScrollArea className="bg-gray-100 p-4">
            <ScrollBar orientation="vertical" className="bg-blue-500" />
            <ScrollBar orientation="horizontal" className="bg-blue-500" />
            <div className="h-[200%] w-[200%] bg-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              dolorum dicta tempora est enim commodi eos optio eveniet. Ipsam
              culpa officiis animi doloremque magni eligendi saepe nobis nemo
              ullam ab! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id et aperiam doloribus repellat excepturi ex? Dolore
              excepturi veritatis nemo cupiditate porro enim maxime tempora,
              facilis dolorum ullam natus magni aliquid!
            </div>
          </ScrollArea>
        </div>
        <div className="h-screen w-64 bg-gray-800 text-white">
          <ScrollArea className="h-full">
            <div className="p-4">
              <ul>
                {items.map((item) => (
                  <li key={item} className="py-2">
                    Item {item + 1}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>
        <div className="flex space-x-4">
          <div className="h-60 w-60 bg-gray-100">
            <ScrollArea>
              <div className="h-[150%] w-full bg-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dolorum dicta tempora est enim commodi eos optio
                eveniet. Ipsam culpa officiis animi doloremque magni eligendi
                saepe nobis nemo ullam ab! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Id et aperiam doloribus repellat
                excepturi ex? Dolore excepturi veritatis nemo cupiditate porro
                enim maxime tempora, facilis dolorum ullam natus magni aliquid!
              </div>
            </ScrollArea>
          </div>
          <div className="h-60 w-60 bg-gray-100">
            <ScrollArea>
              <div className="w-[150%] h-full bg-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dolorum dicta tempora est enim commodi eos optio
                eveniet. Ipsam culpa officiis animi doloremque magni eligendi
                saepe nobis nemo ullam ab! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Id et aperiam doloribus repellat
                excepturi ex? Dolore excepturi veritatis nemo cupiditate porro
                enim maxime tempora, facilis dolorum ullam natus magni aliquid!
              </div>
            </ScrollArea>
          </div>
        </div>
        {/* scrooll area end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* select start */}
        <Select>
          <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
        <Select defaultValue="banana">
          <SelectTrigger aria-label="Food">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange" disabled>
                Orange (Out of Stock)
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
        <Select>
          <SelectTrigger
            className="bg-blue-500 text-white hover:bg-blue-600"
            aria-label="Food"
          >
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                <span role="img" aria-label="apple">
                  🍎
                </span>{" "}
                Apple
              </SelectItem>
              <SelectItem value="banana">
                <span role="img" aria-label="banana">
                  🍌
                </span>{" "}
                Banana
              </SelectItem>
              <SelectItem value="orange">
                <span role="img" aria-label="orange">
                  🍊
                </span>{" "}
                Orange
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">
                <span role="img" aria-label="carrot">
                  🥕
                </span>{" "}
                Carrot
              </SelectItem>
              <SelectItem value="broccoli">
                <span role="img" aria-label="broccoli">
                  🥦
                </span>{" "}
                Broccoli
              </SelectItem>
              <SelectItem value="spinach">
                <span role="img" aria-label="spinach">
                  🌱
                </span>{" "}
                Spinach
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* select end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Separator start */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold">Sección 1</h2>
            <p>Contenido de la primera sección...</p>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-bold">Sección 2</h2>
            <p>Contenido de la segunda sección...</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-base font-semibold">Elemento 1</h3>
          </div>

          <Separator orientation="vertical" />

          <div>
            <h3 className="text-base font-semibold">Elemento 2</h3>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Título Principal</h1>
          <Separator className="my-4" />
          <p>Este es un párrafo debajo de un separador decorativo.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Sección Importante</h2>
          <Separator className="my-4 bg-red-500 h-[2px]" />
          <p>
            Contenido que sigue a un separador personalizado en color rojo y más
            grueso.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-sm">
            Home
          </a>
          <Separator orientation="vertical" className="bg-gray-300" />
          <a href="#about" className="text-sm">
            About
          </a>
          <Separator orientation="vertical" className="bg-gray-300" />
          <a href="#contact" className="text-sm">
            Contact
          </a>
        </div>
        {/* Separator end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* sheet start */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Settings</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Adjust your preferences</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p>Option 1: Lorem ipsum dolor sit amet</p>
              <p>Option 2: Consectetur adipiscing elit</p>
            </div>
            <SheetFooter>
              <Button variant="outline">Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>{" "}
        <Sheet>
          <SheetTrigger asChild>
            <Button color="primary">Give Feedback</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Feedback</SheetTitle>
              <SheetDescription>We value your feedback</SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <textarea
                className="w-full p-2 border rounded-md"
                placeholder="Your feedback"
                rows={4}
              ></textarea>
            </div>
            <SheetFooter>
              <Button color="primary">Submit</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Show Notification</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>New Notification</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <p>You have a new message!</p>
            </div>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">Open Menu</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-blue-500">
                Home
              </a>
              <a href="#about" className="text-blue-500">
                About
              </a>
              <a href="#services" className="text-blue-500">
                Services
              </a>
              <a href="#contact" className="text-blue-500">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        {/* sheet end */}
      </div>
      <div className="flex flex-col gap-4">
        {/* skeleton start */}
        <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
          <div className="flex items-center space-x-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="flex-1 space-y-4 py-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <Skeleton className="h-6 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        {/* skeleton end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* slider start */}
        <div className="w-1/2 mx-auto mt-10">
          <h2 className="text-lg font-semibold">Volume: {volume[0]}%</h2>
          <Slider
            value={volume}
            onValueChange={(value) => setVolume(value)}
            max={100}
            step={1}
            aria-label="Volume"
          />
        </div>
        <div className="w-2/3 mx-auto mt-10">
          <h2 className="text-lg font-semibold">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </h2>
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
            max={100}
            step={1}
            aria-label="Price Range"
            className="mt-4"
          />
        </div>
        <div className="w-1/2 mx-auto mt-10">
          <h2 className="text-lg font-semibold">
            Brightness: {brightness[0]}%
          </h2>
          <Slider
            value={brightness}
            onValueChange={(value) => setBrightness(value)}
            max={100}
            step={5}
            aria-label="Brightness"
          />
        </div>
        <div className="w-1/2 mx-auto mt-10">
          <h2 className="text-lg font-semibold">Playback Speed: {speed[0]}x</h2>
          <Slider
            value={speed}
            onValueChange={(value) => setSpeed(value)}
            min={0.5}
            max={2}
            step={0.1}
            aria-label="Playback Speed"
          />
        </div>
        {/* slider end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* switch start */}
        <div className="flex items-center">
          <label htmlFor="dark-mode-toggle" className="mr-2 text-sm">
            Dark Mode
          </label>
          <Switch
            id="dark-mode-toggle"
            checked={isDarkMode}
            onCheckedChange={handleToggle}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="notifications-toggle" className="mr-2 text-sm">
            Enable Notifications
          </label>
          <Switch
            id="notifications-toggle"
            checked={enabled}
            onCheckedChange={handleToggleOne}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="account-status-toggle" className="mr-2 text-sm">
            Account {isActive ? "Active" : "Inactive"}
          </label>
          <Switch
            id="account-status-toggle"
            checked={isActive}
            onCheckedChange={handleToggleTwo}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="profile-privacy-toggle" className="mr-2 text-sm">
            Profile Privacy
          </label>
          <Switch
            id="profile-privacy-toggle"
            checked={isPrivate}
            onCheckedChange={handleTogglethree}
          />
        </div>
        {/* switch end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* table start */}
        <Table className="min-w-[500px]">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className="min-w-[600px] bg-white shadow-md rounded-lg">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead className="text-blue-600">Product</TableHead>
              <TableHead className="text-blue-600">Price</TableHead>
              <TableHead className="text-blue-600">Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell>$1.00</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Banana</TableCell>
              <TableCell>$0.50</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>$1.50</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {["Item 1", "Item 2", "Item 3"].map((item, index) => (
              <TableRow
                key={index}
                onClick={() => handleRowClick(index)}
                className={selectedRow === index ? "bg-blue-100" : ""}
              >
                <TableCell>{item}</TableCell>
                <TableCell>Details about {item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className="min-w-[400px]">
          <TableCaption>
            This is a simple data table showing some statistics.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Statistic</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Total Users</TableCell>
              <TableCell>500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active Users</TableCell>
              <TableCell>450</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="overflow-x-auto max-h-60">
          <Table className="min-w-[500px]">
            <TableHeader className="sticky top-0 bg-white">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }, (_, index) => (
                <TableRow key={index}>
                  <TableCell>John Doe {index + 1}</TableCell>
                  <TableCell>john{index + 1}@example.com</TableCell>
                  <TableCell>User</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* table end */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* tabs start */}
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>This is the content of Tab 1.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>This is the content of Tab 2.</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p>This is the content of Tab 3.</p>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="overview" className="max-w-md mx-auto">
          <TabsList className="mb-4 border-b border-gray-200">
            <TabsTrigger value="overview" className="text-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="text-blue-600">
              Details
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-blue-600">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p>This is the overview content.</p>
          </TabsContent>
          <TabsContent value="details" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Details</h3>
            <p>This is the details content.</p>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <p>This is the reviews content.</p>
          </TabsContent>
        </Tabs>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            {tabData.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <p>{tab.content}</p>
            </TabsContent>
          ))}
        </Tabs>
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-4">
              <img src="/photo1.jpg" alt="Photo 1" />
              <img src="/photo2.jpg" alt="Photo 2" />
              <img src="/photo3.jpg" alt="Photo 3" />
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="space-y-4">
              <video controls src="/video1.mp4"></video>
              <video controls src="/video2.mp4"></video>
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <ul className="list-disc pl-4">
              <li>
                <a href="/doc1.pdf" download>
                  Document 1
                </a>
              </li>
              <li>
                <a href="/doc2.pdf" download>
                  Document 2
                </a>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="login" className="max-w-md mx-auto">
          <TabsList className="mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Login
              </button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input type="text" id="name" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md"
              >
                Register
              </button>
            </form>
          </TabsContent>
        </Tabs>
        {/* tabs start */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* textarea start */}
        <div className="p-4">
          <Textarea placeholder="Escribe aquí..." />
        </div>
        <form className="p-4 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Comentarios
            <Textarea
              value={value}
              onChange={handleChangeNew}
              placeholder="Escribe tus comentarios aquí..."
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Enviar
          </button>
        </form>{" "}
        <div className="p-4">
          <Textarea
            className="border-blue-500 focus:border-blue-500"
            placeholder="Texto con borde azul"
          />
        </div>
        <div className="p-4">
          <Textarea placeholder="No puedes editar este texto" disabled />
        </div>
        <div className="p-4">
          <Textarea rows={6} placeholder="Textarea con 6 filas visibles" />
        </div>
        <div className="p-4">
          <Textarea
            className="border-red-500 focus:border-red-500"
            placeholder="Texto con borde rojo"
          />
          <p className="text-red-500 mt-2 text-sm">
            Este campo es obligatorio.
          </p>
        </div>
        {/* textarea end*/}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* toggle start */}
        <div className="p-4">
          <Toggle>Basic Toggle</Toggle>
        </div>
        <div className="p-4">
          <Toggle variant="outline">Outline Toggle</Toggle>
        </div>{" "}
        <div className="p-4">
          <Toggle size="sm">Small Toggle</Toggle>
        </div>{" "}
        <div className="p-4">
          <Toggle size="lg" variant="outline">
            Large Outline Toggle
          </Toggle>
        </div>
        <div className="p-4">
          <Toggle disabled>Disabled Toggle</Toggle>
        </div>{" "}
        <div className="p-4">
          <Toggle defaultPressed>On Toggle</Toggle>
        </div>
        <div className="p-4 space-x-2">
          <Toggle>Toggle 1</Toggle>
          <Toggle variant="outline">Toggle 2</Toggle>
          <Toggle size="sm">Toggle 3</Toggle>
          <Toggle size="lg" variant="outline">
            Toggle 4
          </Toggle>
        </div>
        <div className="p-4">
          <Toggle className="bg-green-500 text-white hover:bg-green-600">
            Custom Styled Toggle
          </Toggle>
        </div>
        {/* toggle end */}
      </div>
    </div>
  );
}

"use client";

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
import { Button, buttonVariants } from "../../components/ui/button";
import { AiOutlineClose } from "react-icons/ai";

const AlertDialogPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-4 border border-gray-700 p-4 rounded-xl bg-gray-700 shadow-lg">
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
    </div>
  );
};

export default AlertDialogPage;

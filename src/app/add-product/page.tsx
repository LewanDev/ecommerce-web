import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Agregar producto - TiendaOnline",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Faltan campos requeridos");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl m-3 font-bold">Agregar producto</h1>
      <form className="flex flex-col gap-5" action={addProduct}>
        <input
          required
          name="name"
          placeholder="Nombre"
          className="input input-bordered w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Descripción"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          required
          name="imageUrl"
          placeholder="URL de Imagen"
          type="url"
          className="input input-bordered w-full"
        />
        <input
          required
          name="price"
          placeholder="Precio"
          type="number"
          className="input input-bordered w-full"
        />
        <FormSubmitButton className="btn-block">
          Agregar
        </FormSubmitButton>
      </form>
    </div>
  );
}

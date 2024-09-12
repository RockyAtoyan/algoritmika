import { Breadcrumbs } from "@/shared/ui";

export const LkPage = () => {
  return (
    <div>
      <h1 className={"text-6xl font-black text-main mb-8"}>Привет, Даниил!</h1>
      <Breadcrumbs />
      <div className={"mt-3 bg-background border rounded p-6"}>
        <h3 className={"text-2xl font-semibold"}>
          Добро пожаловать в личный кабинет
        </h3>
        <ol className={"mt-5 list-decimal ml-6"}>
          <li>
            Заполните личные данные, добавьте данные о ребенке, за которого
            будете производить оплату.
          </li>
          <li>Выберите услугу.</li>
          <li>Произведите оплату.</li>
          <li>Вам придет на почту чек об оплате.</li>
        </ol>
      </div>
    </div>
  );
};

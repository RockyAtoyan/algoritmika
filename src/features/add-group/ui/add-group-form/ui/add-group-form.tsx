"use client";

import { FC, useState } from "react";
import {
  Button,
  DatePicker,
  FormikInput,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@/shared/ui";
import { Form, Formik, FormikHelpers } from "formik";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/shared/utils";

interface Props {}

interface Lesson {
  id: number;
  day?: number;
  time?: Date | string;
  class?: string;
}

export const AddGroupForm: FC<Props> = () => {
  const [lessons, setLessons] = useState<Lesson[]>([{ id: 1 }]);

  const handleSubmit = (values, {}: FormikHelpers<any>) => {
    if (lessons.some((lesson) => !lesson.time || !lesson.class)) return;
    const data = {
      ...values,
      lessons: lessons.filter((lesson) => lesson.class && lesson.time),
    };
    console.log(data);
  };

  return (
    <div className={"bg-white border rounded"}>
      <div className={"border-b py-4 px-6"}>
        <h3 className={"text-lg"}>Общие данные</h3>
      </div>
      <Formik
        initialValues={{
          name: "",
          course: "",
          firstLessonDate: undefined,
          teacher: "",
          master: "",
          isActive: false,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={"flex flex-col gap-8 p-6"}>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Название
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <FormikInput
                  required
                  name={"name"}
                  placeholder={"Название группы"}
                />
              </label>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Курс
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <Select
                  required
                  value={values["course"]}
                  onValueChange={(value) => setFieldValue("course", value)}
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue placeholder="Название курса" />
                  </SelectTrigger>
                  <SelectContent className={"max-h-[15rem]"}>
                    <SelectGroup>
                      <SelectLabel>
                        Школа программирования "Алгоритмика"
                      </SelectLabel>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectLabel>
                        Школа программирования "Алгоритмика"
                      </SelectLabel>
                      <SelectItem value="6">1</SelectItem>
                      <SelectItem value="7">2</SelectItem>
                      <SelectItem value="8">3</SelectItem>
                      <SelectItem value="9">4</SelectItem>
                      <SelectItem value="10">5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>Дата первого занятия</div>
                <DatePicker
                  className={"w-full"}
                  date={values["firstLessonDate"]}
                  setDate={(value) => {
                    setFieldValue("firstLessonDate", value);
                  }}
                />
              </label>
              <div className={"flex flex-col gap-3"}>
                <div className={"text-sm flex items-center gap-2"}>
                  <span>Расписание</span>
                  <Button
                    className={"w-6 h-6"}
                    variant={"primary"}
                    size={"icon"}
                    onClick={() => {
                      setLessons((prev) => [
                        ...prev,
                        { id: prev[prev.length - 1]?.id + 1 },
                      ]);
                    }}
                  >
                    <Plus className={"w-4"} />
                  </Button>
                </div>
                <div className={"flex flex-col gap-3"}>
                  {lessons
                    .sort((l1, l2) => l1.id - l2.id)
                    .map((lesson) => {
                      return (
                        <div
                          key={lesson.id}
                          className={"w-2/3 flex items-end gap-5"}
                        >
                          <label className={"w-1/3 flex flex-col gap-1"}>
                            <div className={"text-sm"}>День недели</div>
                            <Select
                              onValueChange={(value) => {
                                setLessons((prev) => [
                                  ...prev.filter((l) => l.id !== lesson.id),
                                  { ...lesson, day: +value },
                                ]);
                              }}
                            >
                              <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder="День" />
                              </SelectTrigger>
                              <SelectContent className={"max-h-[15rem]"}>
                                <SelectGroup>
                                  <SelectItem value="1">Понедельник</SelectItem>
                                  <SelectItem value="2">Вторник</SelectItem>
                                  <SelectItem value="3">Среда</SelectItem>
                                  <SelectItem value="4">Четверг</SelectItem>
                                  <SelectItem value="5">Пятница</SelectItem>
                                  <SelectItem value="6">Суббота</SelectItem>
                                  <SelectItem value="7">Воскресенье</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </label>
                          <label className={"w-1/3 flex flex-col gap-1"}>
                            <div className={"text-sm"}>
                              {" "}
                              Время
                              <span className={"text-red-500 ml-1"}>*</span>
                            </div>
                            <Input
                              type={"time"}
                              onChange={(event) => {
                                const value = event.currentTarget.value;
                                setLessons((prev) => [
                                  ...prev.filter((l) => l.id !== lesson.id),
                                  { ...lesson, time: value },
                                ]);
                              }}
                            />
                          </label>
                          <label className={"w-1/3 flex flex-col gap-1"}>
                            <div className={"text-sm"}>
                              {" "}
                              Кабинет
                              <span className={"text-red-500 ml-1"}>*</span>
                            </div>
                            <Input
                              placeholder={"Номер кабинета"}
                              onChange={(event) => {
                                const value = event.currentTarget.value;
                                setLessons((prev) => [
                                  ...prev.filter((l) => l.id !== lesson.id),
                                  {
                                    ...lesson,
                                    class: value,
                                  },
                                ]);
                              }}
                            />
                          </label>
                          <Button
                            type={"button"}
                            className={
                              "w-6 h-6 mb-2 bg-red-500 hover:bg-red-700 border-0"
                            }
                            variant={"primary"}
                            size={"icon"}
                            onClick={() => {
                              setLessons((prev) =>
                                prev.filter((l) => l.id !== lesson.id),
                              );
                            }}
                          >
                            <Minus className={"w-4"} />
                          </Button>
                        </div>
                      );
                    })}
                </div>
              </div>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Педагог
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <Select
                  required
                  value={values["teacher"]}
                  onValueChange={(value) => setFieldValue("teacher", value)}
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={"max-h-[15rem]"}>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className={"flex flex-col gap-1"}>
                <div className={"text-sm"}>
                  Куратор
                  <span className={"text-red-500 ml-1"}>*</span>
                </div>
                <Select
                  required
                  value={values["master"]}
                  onValueChange={(value) => setFieldValue("master", value)}
                >
                  <SelectTrigger className={"w-full"}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={"max-h-[15rem]"}>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className={"flex items-center gap-3"}>
                <Switch
                  checked={values["isActive"]}
                  onCheckedChange={(value) => setFieldValue("isActive", value)}
                />
                <div
                  className={cn(
                    "text-sm text-black/40 transition",
                    values["isActive"] && "text-black",
                  )}
                >
                  Группа активна
                </div>
              </label>
            </div>

            <div
              className={
                "flex items-center justify-end gap-1 border-t p-4 px-6"
              }
            >
              <Button type={"submit"} variant={"primary"} size={"sm"}>
                Добавить
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

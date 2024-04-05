export interface IPractice {
  role: string;
  company: string;
  title: string;
  internshipBeginning?: Date | string | undefined;
  internshipEnding?: Date | string | undefined;
  isActive?: boolean;
  description: string;
  testTask?: string | URL | undefined;
}

/*
      IPractice
      role: Направление стажировки/практика
      company: Компания, в которой будет проходить стажировка/практика
      title: Именование должности стажировки/практики
      internshipBeginning?: Строка или объект дата - дата начала стажировки (необязятельный параметр, по умолчанию undefined)
      internshipEnding?: Строка или объект дата - дата конца стажировки (необязятельный параметр, по умолчанию undefined)
      isActive?: Активен ли в данный момент набор на стажировку/практику (необязятельный параметр, по умолчанию true)
      description: Описание, прилагаемое к вакансии или условиям отбора
      testTask?: При наличии тестового задания - само тестовое задание (необязятельный параметр, по умолчанию undefined)
  */

export interface IReview {
  name: string;
  age: number;
  currentPosition: string;
  profilePhoto: string | URL;
  description: string;
}

/*
      IReview
      name: Имя пользователя, оставившего отзыв
      age: Возраст пользователя, оставившего отзыв
      currentPosition: Текущая занимаемая должность пользователя, оставившего отзыв
      profilePhoto: Ссылка на фотографию/аватарку пользователя, оставившего отзыв
      description: Непосредственно текст отзыва
  */

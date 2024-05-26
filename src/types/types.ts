export interface IPractice {
  id: number;
  role: string;
  description: string;
}

/*
	IPractice
	role: Направление стажировки/практики
	company: Компания, в которой будет проходить стажировка/практика
	title: Именование должности стажировки/практики
	internshipBeginning?: Строка или объект дата - дата начала стажировки (необязятельный параметр, по умолчанию undefined)
	internshipEnding?: Строка или объект дата - дата конца стажировки (необязятельный параметр, по умолчанию undefined)
	isActive?: Активен ли в данный момент набор на стажировку/практику (необязятельный параметр, по умолчанию true)
	description: Описание, прилагаемое к вакансии или условиям отбора
	testTask?: При наличии тестового задания - само тестовое задание (необязятельный параметр, по умолчанию undefined)
	employerHref: Ссылка на сайт работодателя (набор на практику)
*/

export interface IReview {
  id: number;
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

export interface ICompany {
  id: number;
  title: string;
  companyHref: string | URL;
}
/*
	ICompany
	name: название Компании
	companyHref: Ссылка на сайт компании
*/

export interface IUser {
  id: number;
  name: string;
  password: string;
  age: number;
  profilePhoto: string | URL;
  registerDate: Date;
  phoneNumber: string;
  email: string;
}

/*
	IUser
  id: идентификатор пользователя
	firstName: Имя пользователя
  lastName: фамилия
	age: Возраст пользователя
	profilePhoto: Ссылка на фотографию/аватарку пользователя
  phoneNumber: Номер телефона пользователя
  email: email пользователя
*/

export interface IRole {
  id: number;
  title: string;
  description: string;
}

/*
	IRole
  id: идентификатор роли
	title: Название роли
	salary: Зарплата (изначально undefined)
*/

export interface ITask {
  id: number;
  condition: string;
  complexity: number;
}

/*
	ITask
  id: идентификатор задачи
	condition: Условие задачи
	complexity: Сложность задачи
*/

export interface ISalary {
  id: number;
  count: number;
  currency: string;
}

/*
	ISalary
  id: идентификатор зарплаты
	count: количество
	currency: валюта
*/

export interface IComplexity {
  id: number;
  description: string;
  complexity: number;
}

export class CreatePracticeDto {
  readonly id: number;
  readonly role: string;
  readonly company: string;
  readonly title: string;
  readonly description: string;
  readonly employerHref: string | URL;
}

export default class UpdateProjectDTO {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly deadline: Date;
  readonly budget: number;
  readonly attachedFileLink: string;
  readonly talentGuarantee: number;
  readonly requiredTalents: string;
  readonly submissionDate: Date;
}

export default class CreateProjectDTO {
  readonly eid: number;
  readonly title: string;
  readonly description: string;
  readonly deadline: Date;
  readonly budget: number;
  readonly attachedFileLink: string; // optional
  readonly talentGuarantee: number;
  readonly requiredTalents: string; // optional
}

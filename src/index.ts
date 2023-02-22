export enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
};

export type testResult = "pass" | "fail" | "incomplete";

export const Greeter = (name: string) => `Hello ${name}`;

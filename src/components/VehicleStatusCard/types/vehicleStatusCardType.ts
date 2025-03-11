// vehicleStatusCardType.ts
export type Status = "완료" | "대기" | "미완료";
export type CarStatusProps = {
  carStatus: Status;
};
export type CarNumberProps = {
  carNumber: string;
};
export type CarNameProps = {
  carName: string;
};

export type VehicleStatusCardProps = CarNameProps & CarStatusProps & CarNumberProps;

import { CoolGeryColors, SecondaryColors } from "../../../types/colors";
import { BODYFONT } from "../../../types/fonts";

export type Status = "완료" | "대기" | "미완료";

export type CarStatusProps = {
  carStatus: Status;
};

const CarStatus = ({ carStatus = "미완료" }: CarStatusProps) => {
  const obj: { [key in Status]: string } = {
    대기: SecondaryColors.GreenDark,
    미완료: SecondaryColors.RedVariant,
    완료: CoolGeryColors.CoolGrey20,
  };
  return <span style={{ ...BODYFONT.B2, color: obj[carStatus] }}>{carStatus}</span>;
};

export default CarStatus;

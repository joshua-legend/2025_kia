import { CoolGeryColors, SecondaryColors } from "../../types/colors";
import CarName, { CarNameProps } from "./subcomponents/CarName";
import CarNumber, { CarNumberProps } from "./subcomponents/CarNumber";
import CarStatus, { CarStatusProps, Status } from "./subcomponents/CarStatus";

export type VehicleStatusCardProps = CarNameProps & CarStatusProps & CarNumberProps;

const VehicleStatusCard = ({ carStatus, carName, carNumber }: VehicleStatusCardProps) => {
  const obj: { [key in Status]: string } = {
    대기: SecondaryColors.GreenLight,
    미완료: SecondaryColors.RedLight,
    완료: CoolGeryColors.CoolGrey5,
  };

  return (
    <article style={{ backgroundColor: obj[carStatus], display: "flex", flexDirection: "column", gap: "4px", padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName carName={carName} />
        <CarStatus carStatus={carStatus} />
      </div>
      <CarNumber carNumber={carNumber} />
    </article>
  );
};

export default VehicleStatusCard;

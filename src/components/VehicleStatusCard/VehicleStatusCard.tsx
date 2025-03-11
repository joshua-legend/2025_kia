import { STATUS_BG_COLORS } from "./styles/statusColor";
import CarName from "./subcomponents/CarName";
import CarNumber from "./subcomponents/CarNumber";
import CarStatus from "./subcomponents/CarStatus";
import { VehicleStatusCardProps } from "./types/vehicleStatusCardType";

const VehicleStatusCard = ({ carStatus, carName, carNumber }: VehicleStatusCardProps) => {
  return (
    <article style={{ backgroundColor: STATUS_BG_COLORS[carStatus], display: "flex", flexDirection: "column", gap: "4px", padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName carName={carName} />
        <CarStatus carStatus={carStatus} />
      </div>
      <CarNumber carNumber={carNumber} />
    </article>
  );
};

export default VehicleStatusCard;

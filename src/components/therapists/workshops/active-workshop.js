import WorkshopCard from "./workshop-card";

export default function ActiveWorkshop({ pageData }) {
  return (
    <div className="row g-5">
      {pageData.map((item) => {
        return <WorkshopCard key={item._id} data={item} />;
      })}
    </div>
  );
}

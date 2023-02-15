import React from "react";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import TopInfo from "@/components/TopInfo";
import { useSession } from "@supabase/auth-helpers-react";
import useCategoryQuery from "@/hooks/useCategoryQuery";

function Sport() {
  const { data, loading } = useCategoryQuery("cars", "category ", "Sport");

  const session = useSession();

  return (
    <div>
      {" "}
      {session && <TopInfo />}
      <Link href={"/categories"}>back to categories</Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.map((e, index) => (
          <div key={index}>
            <CarCard
              category={e.category}
              carImage={
                "https://seeklogo.com/images/L/line-art-car-logo-99DBB62CB3-seeklogo.com.png"
              }
              make={e.make}
              model={e.model}
              rate={e.rate}
              transmission={e.transmission}
              doors={e.doors}
              horsepower={e.horsepower}
              price={e.price}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Sport;
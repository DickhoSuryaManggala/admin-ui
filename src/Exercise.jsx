import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <UserCard 
                name="Dickho" 
                email="Dickho@gmail.com"
                street="Jl. telaga sari"
                city="ungaran"
            />
            <UserCard 
                name="surya" 
                email="surya@gmail.com"
                street="Jl. pati"
                city="pati"
            />
            <UserCard 
                name="sigit" 
                email="sigit@gmail.com"
                street="Jl. pahlawan"
                city="semarang"
            />
        </div>
      </div>
    </>
  );
}

export default Exercise;

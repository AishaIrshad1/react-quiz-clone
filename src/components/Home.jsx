const Home = ({ onStart }) => {
  return (
    <main className="text-center py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to The React Quiz!</h1>
      
      <p className="text-xl mb-6 text-gray-300 font-bold">
        15 questions to test your React mastery
      </p>
      
      <button
        onClick={onStart}
        className="py-3 px-6 rounded-full bg-[#3a3f47] hover:bg-[#343a40] border border-[#6a6a6a] text-white text-[16px] transition duration-300"
      >
        Let's start
      </button>
    </main>
  );
};

export default Home;

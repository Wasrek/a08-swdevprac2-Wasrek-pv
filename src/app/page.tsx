import Banner from '@/components/Banner';
import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Banner />
      <PromoteCard />
    </main>
  );
}

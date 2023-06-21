export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="flex justify-center" aria-label="読み込み中">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent">読み込み中。</div>
      </div>
      <a href="https://portfolio-site-five-virid.vercel.app/">ホームに戻ります。</a>
      <p>'Loading...'</p>
    </>
  );
}

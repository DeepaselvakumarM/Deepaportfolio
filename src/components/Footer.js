// export default function Footer(){
//     return <div className="py-4 bg-secondary text-center text-white">&copy; portFolio 2024</div>
// }


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1976d2] to-[#9c27b0] text-white py-5 text-center">
      <p className="text-sm tracking-wide">
        &copy; {year} Deepa Selvakumar | Built with 💙 using React 
      </p>
    </footer>
  );
}



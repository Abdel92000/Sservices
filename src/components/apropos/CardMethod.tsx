


export default function CardMethod({title, img, text, alt }:{
    title: string;
    img: string;
    text: string;
    alt: string;

}){


  return (
    <article>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{text}</p>
        <p style={{color:"green",fontWeight:"bold",marginTop:"1rem"}}>✅ Étape validée</p>


    </article>
  
  );
}

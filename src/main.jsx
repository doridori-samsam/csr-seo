import { StrictMode } from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

const element = document.getElementById('root');
const root = createRoot(element);
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </BrowserRouter>
//   </StrictMode>
// );

// if(element.hasChildNodes()) {
//     hydrateRoot(element,
//         <BrowserRouter>
//             <HelmetProvider>
//                 <App />
//             </HelmetProvider>
//         </BrowserRouter>
//     )
// } else {
    root.render(

            <BrowserRouter>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </BrowserRouter>

    )
//}
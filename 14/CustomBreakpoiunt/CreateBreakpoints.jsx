import { createMuiTheme } from "@material-ui/core";

export const breakpoints=createMuiTheme({
    breakpoints:{
        values:{
            // 99px-786px-568px-420px
            xs:420,
            sm:568,
            md:786,
            lg:996,
            xl:1280
        }
    }
})
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ initialInvestment,
    annualInvestment,
    expectedReturn,
    duration}) {

    const annualData = calculateInvestmentResults({ initialInvestment,
        annualInvestment,
        expectedReturn,
        duration});
    return(
        <table id='result'>           
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {/* aici tre sa fac un for each sa imi afiseze cate un tablerow pt fiecare element din annual data */}
               {annualData.forEach((annualResult => {
                <TableRow result = {annualResult}/>
               }))}                
            </tbody>
        </table>
    
    )
}
import { useState } from "react"

// don't put enums in the typings.d.ts it will cause errors sometimes
enum CarStatus {
    Sold = 'SOLD',
    Available = 'AVAILABLE',
    Pending = 'PENDING'
}

export default function EnumPage(){

const [currentCar, setCurrentCar] = useState(CarStatus.Sold);

    return(
        <>
            {
                CarStatus.Sold && <p>SOLD</p>
            }
            {
                CarStatus.Available && <p>AVAILABLE</p>
            }
            {
                CarStatus.Pending && <p>PENDING</p>
            }

            <h1>More logic</h1>

            {currentCar === CarStatus.Sold && <p>The car has been sold</p>}
            {currentCar === CarStatus.Available && <p>The car has been available</p>}
            {currentCar === CarStatus.Pending && <p>The car has been pending</p>}
        </>
    )
}
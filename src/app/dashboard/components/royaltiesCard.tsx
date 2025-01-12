"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

const royaltiesCard = [
    { title: "From 0 to 1000 Copies." },
    { title: "From 1000 to 20000 Copies." },
];

export default function RoyaltiesCard() {
    return (
        <div>
            <h6 className="text-2xl	mb-3">Royalties</h6>
            <p className="mb-7 text-sm text-muted-foreground">
                Lorem Ipsum
            </p>
            <div className="pl-10">
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Single Rate Royalties</h6>
                    <p className="mb-5 text-sm text-muted-foreground">Lorem ipsum</p>
                    <div className="flex flex-wrap gap-[18px]">
                        <Card className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                                <CardTitle className="text-xs font-normal pb-5">
                                    Royalties
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="text-xs font-normal text-[#4EABFE]">50%</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="mb-14">
                    <h6 className="text-lg mb-2.5">Tiered Royalties</h6>
                    <p className="mb-5 text-sm text-muted-foreground">
                        Lorem ipsum
                    </p>
                    <div className="flex flex-wrap gap-[18px]">
                        {royaltiesCard.map((card, index) => (
                            <Card
                                key={index}
                                className="bg-modal-foreground border-[#1D1D1F] pt-2 px-2.5 pb-4 w-[132px] h-[102px]"
                            >
                                <CardHeader className="flex flex-col space-y-0 p-0">
                                    <CardTitle className="text-xs font-normal pb-1">
                                        Royalties
                                    </CardTitle>
                                    <p className="text-[8px] text-muted-foreground">{card.title}</p>
                                </CardHeader>
                                <CardContent className="p-0 pt-5">
                                    <div className="text-xs font-normal text-[#4EABFE]">
                                        50%
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

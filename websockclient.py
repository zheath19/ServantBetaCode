#!/usr/bin/env python

import asyncio
from websockets import connect

async def hello(uri):
    async with connect(uri) as websocket:
        await websocket.send("Hello world!")
        x = await websocket.recv()
        print(x)

asyncio.run(hello("ws://localhost:8765"))

---
title: "RoslynPad for C# Development"
slug: "roslynpad-for-csharp-development"
date: "2021-04-10"
tags: ["c#", ".net"]
---

As a C# developer, I found that [RoslynPad](https://github.com/aelij/RoslynPad) is so useful for my daily C# development. It is a simple C# editor that allow you to run C# code snippet. It is like [LINQPad](https://www.linqpad.net/) but it is free and open source. However, it has less feature than LINQPad provides. Personally I don't need all the fancy feature from LINQPad, so I went for RoslynPad.

Sometimes I just want to quickly run and test my C# code. Creating a new console app from Visual Studio is not an option since it is too slow. I also try to use dotnet cli with VS Code to create a console app and use `dotnet run` to execute my code. However, I still find it takes too many steps. With RoslynPad, I can just launch it and start to write my C# code immediately. It doesn't need any `namespace`, `class` or `main` method. I often use it to test some DateTime string conversion, LINQ, list manipulation and etc.

RoslynPad also supports nuget package. Sometimes I use [Bogus](https://www.nuget.org/packages/Bogus/) to generate some fake data for me to test.

One bad thing I found is RoslynPad doesn't ship with macOS installer. If you want to use it on macOS you have to compile from source which is pretty inconvenient.

If you are a C# developer who only work on Windows I recommend you check it out.


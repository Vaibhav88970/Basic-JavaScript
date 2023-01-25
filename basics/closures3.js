var c =10;
        function First_func(){
            var d =20;
            function second_func(){
                var e =c+d
                return e
            }
            return second_func()
        }
        var sum = First_func()
        document.write(sum)
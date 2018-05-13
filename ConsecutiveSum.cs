 static int consecutive(long num) {
      long _sumOfIntegers = 3;
      long _count = 0;
      for(long _index = 2 ; _sumOfIntegers<=num; ++_index){
        if(((_index%2).Equals(0))?((num%_index).Equals(_index/2)): ((num%_index).Equals(0))){
            ++_count;
        }
        _sumOfIntegers = _sumOfIntegers+_index+1;
      }
      return (int)_count;
    }
    
static void Main(String[] args) {
        string fileName = System.Environment.GetEnvironmentVariable("OUTPUT_PATH");
        TextWriter tw = new StreamWriter(@fileName, true);

        int res;
        long num;
        num = Convert.ToInt64(Console.ReadLine());

        res = consecutive(num);
        tw.WriteLine(res);

        tw.Flush();
        tw.Close();
    }